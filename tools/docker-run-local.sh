#!/bin/sh
# Run the locally built image with media mounted from an external drive.
#
# Pairs with tools/docker-build-local.sh (which builds without baked
# media because media/ is a symlink to ~14 GB on an external drive).
# Resolves the media symlink's target automatically, so the container
# sees the same files the repository serves.

set -e
cd "$(dirname "$0")/.."

if [ ! -d media ] || [ -L media ]; then
  MEDIA_SRC=$(readlink media 2>/dev/null || true)
else
  MEDIA_SRC=""
fi

# fall back to a real in-repo media directory (no symlink) if present
if [ -z "$MEDIA_SRC" ]; then
  echo "media/ is a real directory — use the canonical docker run (baked media)"
  exit 1
fi

SSL_PORT="${SSL_PORT:-8443}"
HTTP_PORT="${HTTP_PORT:-8080}"

docker rm -f motionbank-scores-ssl >/dev/null 2>&1 || true
docker run -d --name motionbank-scores-ssl \
  -p "$SSL_PORT":443 -p "$HTTP_PORT":80 \
  -v "$MEDIA_SRC":/usr/share/nginx/html/media:ro \
  motionbank-scores:ssl
sleep 8
docker ps --filter name=motionbank-scores-ssl --format '{{.Status}}'
echo "https://localhost:$SSL_PORT/dh/  https://localhost:$SSL_PORT/jbmf/  https://localhost:$SSL_PORT/two/"
