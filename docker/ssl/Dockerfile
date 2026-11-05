# Local-development SSL variant of the motionbank-scores image.
#
# A throwaway self-signed certificate for "localhost" is generated INSIDE the
# container at startup (private key never leaves the container filesystem).
#
# Build (requires the base image first):  docker build -t motionbank-scores .
#                                         docker build -t motionbank-scores:ssl -f docker/ssl/Dockerfile .
# Run:                                    docker run --rm -p 8443:443 -p 8080:80 motionbank-scores:ssl
#                                         → https://localhost:8443/  (trust the cert in your browser first)
#           plain HTTP redirects to HTTPS.

FROM motionbank-scores:latest

RUN apk add --no-cache openssl

COPY docker/ssl/nginx-ssl.conf /etc/nginx/conf.d/default.conf
COPY docker/ssl/entrypoint.sh /usr/local/bin/docker-entrypoint-ssl.sh
RUN chmod +x /usr/local/bin/docker-entrypoint-ssl.sh

EXPOSE 80 443

# The inherited HEALTHCHECK hits http://localhost/ which 301-redirects to
# HTTPS (busybox wget treats that as an error, so the container showed
# "unhealthy" despite serving fine). Probe the dedicated /health endpoint.
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://localhost/health >/dev/null 2>&1 || exit 1

ENTRYPOINT ["/usr/local/bin/docker-entrypoint-ssl.sh"]
