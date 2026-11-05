#!/bin/sh
# Generates a throwaway self-signed certificate for localhost inside the
# container (if not present) and starts nginx. The private key lives only in
# the container filesystem — never on the host.
set -e

CERT_DIR=/etc/nginx/certs
CERT="$CERT_DIR/cert.pem"
KEY="$CERT_DIR/key.pem"

if [ ! -f "$CERT" ]; then
    echo ">> generating self-signed certificate for localhost ..."
    mkdir -p "$CERT_DIR"
    openssl req -x509 -newkey rsa:2048 -sha256 -days 365 -nodes \
        -subj "/CN=localhost" \
        -addext "subjectAltName=DNS:localhost,IP:127.0.0.1" \
        -keyout "$KEY" -out "$CERT"
    echo ">> done. Export the public cert for browser trust with:"
    echo "   docker cp motionbank-scores-ssl:$CERT ./docker/localhost.crt"
fi

exec nginx -g 'daemon off;'
