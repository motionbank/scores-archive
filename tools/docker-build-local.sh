#!/bin/sh
# Build the motionbank-scores image locally.
#
# The canonical Dockerfile no longer bakes media in at build time (the
# archive is ~20 GiB): the container's entrypoint downloads media on first
# start unless it is already present (or MEDIA_DOWNLOAD=0). So a local
# build is now just the canonical build — this script is kept as the
# documented entry point for the local workflow.
#
# For local review/testing, pair it with tools/docker-run-local.sh, which
# mounts the repository's media/ directory (possibly a symlink to an
# external drive) read-only instead of downloading the archive.
#
# CI/production builds are the same media-free image; production deploys
# mount a persistent volume (see README "Media self-hosting").

set -e
cd "$(dirname "$0")/.."

docker build -t motionbank-scores:latest .
echo
echo "built motionbank-scores:latest (media-free)"
echo "run it with: tools/docker-run-local.sh"
