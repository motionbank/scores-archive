#!/bin/sh
# Local Docker build WITHOUT baked media.
#
# The repository's media/ directory may be a symlink to an external drive
# (it is ~14 GB). Docker does not follow symlinks out of the build
# context, so a normal `docker build` would fail — and dereferencing it
# would duplicate the media into Docker.raw and fill the system disk
# again. This script builds the same image minus the media COPY layers;
# run the container with the media volume-mounted instead:
#
#   tools/docker-build-local.sh
#   tools/docker-run-local.sh            (mounts media from its target)
#
# CI/production keep the canonical Dockerfile with media baked in
# (extracted from the published archive before `docker build`).

set -e
cd "$(dirname "$0")/.."

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

# strip the media-baking lines; keep everything else identical.
# The build context stays the repository root (Docker includes the media
# symlink as a plain link entry; we simply never COPY it, and mount it
# at runtime instead).
grep -v '^COPY media ' Dockerfile \
  | grep -v '^COPY assets/images/dh-missing-poster.jpg' > "$TMP/Dockerfile"

docker build -f "$TMP/Dockerfile" -t motionbank-scores:latest .
echo
echo "built motionbank-scores:latest (no baked media)"
echo "run it with: tools/docker-run-local.sh"
