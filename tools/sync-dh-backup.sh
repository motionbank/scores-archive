#!/bin/sh
# Merge the /dh production backup (using_the_sky_media) into the media tree.
#
# The backup (originally the "Using the Sky" production drive) contains the
# complete original cell-asset tree — more than CloudFront ever served:
#   app/cells/          overlay PNGs (recording/visualization), poster images
#   app/imgs/           background images referenced by the app CSS
#   piecemaker/         all 159 recording/filming MP4s (+ .ogv RTMP-era variants)
#
# Usage:
#   tools/sync-dh-backup.sh [backup-dir] [media-dh-dir]
#   defaults: /Volumes/transport/using_the_sky_media  →  <repo>/media/dh
# (or the symlink target, if media/ points at an external drive)
#
# After merging, the overlay availability manifest must be regenerated
# (this script does it via tools/list-overlay-pngs.py --from-media, or
# falls back to reminding you).
set -e
cd "$(dirname "$0")/.."

SRC="${1:-/Volumes/transport/using_the_sky_media}"
if [ -L media ] && [ ! -d media ]; then
    echo "media symlink is broken — mount the target drive first" >&2
    exit 1
fi
DEST="$(cd media && pwd)/dh"

[ -d "$SRC/app/cells" ] || { echo "no app/cells in $SRC" >&2; exit 1; }

echo ">> syncing app/cells + app/imgs from $SRC"
mkdir -p "$DEST/app"
# macOS-safe: skip Finder/Spotlight junk
rsync -a \
    --exclude='.DS_Store' --exclude='._*' \
    --exclude='.Spotlight-V100' --exclude='.Trashes' \
    --exclude='.fseventsd' --exclude='.DocumentRevisions-V100' \
    --exclude='.TemporaryItems' \
    "$SRC/app/cells/" "$DEST/app/cells/"
rsync -a --exclude='.DS_Store' --exclude='._*' \
    "$SRC/app/imgs/" "$DEST/app/imgs/" 2>/dev/null || true

echo ">> syncing piecemaker recordings (referenced takes only — the backup
   also holds ~110 unreferenced camera variants / .ogv files, ~27 GB, that
   the scores never request and that would bloat the archive)"
for name in $(ls dh/dhay/player/scenes/*.json | xargs -n1 basename | grep -v '^index\.json$' | sed 's/\.json$//'); do
    for f in "$SRC/piecemaker/$name.mp4"; do
        [ -f "$f" ] || continue
        dest="$DEST/piecemaker/$name.mp4"
        [ -f "$dest" ] || { echo "   + $name.mp4"; cp "$f" "$dest"; }
    done
done

echo ">> done. Regenerating the overlay availability manifest:"
python3 dh/tools/regenerate-overlay-manifest.py "$DEST"
