#!/bin/sh
# Container entrypoint: make sure the self-hosted media set is present,
# then exec the image's CMD.
#
# The Docker image ships WITHOUT media (the archive is ~20 GiB — baking it
# in at build time breaks CI runners' disks). On the first start the
# container downloads the archive from $MEDIA_URL, verifies it against the
# published SHA-256 checksum, and extracts it into /usr/share/nginx/html
# (the archive contains media/... entries).
#
# The download only happens when the media directory is empty/unmarked, so
# restarting the *same* container never re-downloads. Recreated containers
# start fresh — mount a volume (or bind mount) on
# /usr/share/nginx/html/media to persist across recreation:
#
#   docker volume create motionbank-media
#   docker run -v motionbank-media:/usr/share/nginx/html/media ...
#
# Set MEDIA_DOWNLOAD=0 to skip the download entirely (e.g. when the media
# directory is mounted from elsewhere, or for offline smoke tests).
set -e

MEDIA_DIR=/usr/share/nginx/html/media
MEDIA_URL="${MEDIA_URL:-https://assets.motionbank.org/archive/motionbank-scores-media.tar.gz}"
MARKER="$MEDIA_DIR/.complete"

have_media() {
    [ -f "$MARKER" ] || { [ -d "$MEDIA_DIR/dh/piecemaker" ] && [ -d "$MEDIA_DIR/jbmf/piecemaker" ]; }
}

if [ "${MEDIA_DOWNLOAD:-1}" != "0" ] && ! have_media; then
    echo ">> media-entrypoint: no media in $MEDIA_DIR"
    echo ">> downloading $MEDIA_URL  (this can take a while; happens once per container filesystem/volume)"
    TARBALL=/tmp/media.tar.gz
    wget -q -O "$TARBALL" "$MEDIA_URL"

    echo ">> verifying checksum ..."
    wget -q -O /tmp/media.tar.gz.sha256 "$MEDIA_URL.sha256"
    # The published .sha256 names the archive "motionbank-scores-media.tar.gz"
    # but our download is /tmp/media.tar.gz — compare hashes directly instead
    # of delegating to `sha256sum -c` (which keys on the filename).
    expected=$(cut -d' ' -f1 /tmp/media.tar.gz.sha256 | head -n1)
    actual=$(sha256sum "$TARBALL" | cut -d' ' -f1)
    if [ -z "$expected" ] || [ "$actual" != "$expected" ]; then
        echo ">> media-entrypoint: CHECKSUM MISMATCH for $MEDIA_URL"
        echo "   expected: $expected"
        echo "   actual:   $actual"
        exit 1
    fi
    echo ">> checksum OK"

    echo ">> extracting ..."
    # The archive may contain media/... entries (extract at the html root)
    # or the media/ contents directly (extract into ./media/).
    first_entry=$(tar -tzf "$TARBALL" 2>/dev/null | head -n1 || true)
    case "$first_entry" in
        media/*) tar -xzf "$TARBALL" -C /usr/share/nginx/html ;;
        *)       mkdir -p "$MEDIA_DIR"; tar -xzf "$TARBALL" -C "$MEDIA_DIR" ;;
    esac
    rm -f "$TARBALL" /tmp/media.tar.gz.sha256

    if [ ! -d "$MEDIA_DIR/dh/piecemaker" ]; then
        echo ">> media-entrypoint: extraction did not produce media/dh/piecemaker — refusing to start"
        exit 1
    fi
    touch "$MARKER"
    echo ">> media-entrypoint: media ready ($(du -sh "$MEDIA_DIR" | cut -f1))"
else
    if have_media; then
        echo ">> media-entrypoint: media already present, skipping download"
    else
        echo ">> media-entrypoint: MEDIA_DOWNLOAD=0 — starting without media"
    fi
fi

exec "$@"
