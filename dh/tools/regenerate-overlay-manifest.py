#!/usr/bin/env python3
"""Regenerate dh/dhay/overlay-manifest.json from the actual media tree.

The manifest lists the overlay PNGs that exist on the serving origin under
dh/app/cells/{recording,visualization}/full/ — the /dh cell views consult
it to skip requests that would 404 (cells keep their last overlay instead).

Originally generated from the mirrored CloudFront tree; re-run this after
merging new assets (e.g. tools/sync-dh-backup.sh) so newly available
overlays stop being skipped.

Usage:  python3 dh/tools/regenerate-overlay-manifest.py [media-dh-dir]
        default: <repo>/media/dh (follows the media symlink)
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def listdir(path):
    out = []
    for dirpath, dirs, files in os.walk(path):
        dirs[:] = [d for d in dirs if not d.startswith('.')]
        for f in files:
            if f.startswith('.') or f == 'missing.jpg':
                continue
            rel = os.path.relpath(os.path.join(dirpath, f), path)
            out.append(rel.replace(os.sep, '/'))
    return sorted(out)


def main():
    media_dh = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'media', 'dh')
    cells = os.path.join(media_dh, 'app', 'cells')
    if not os.path.isdir(cells):
        print(f'error: {cells} not found (is the media volume mounted?)',
              file=sys.stderr)
        sys.exit(1)

    manifest = {}
    for section in ('recording', 'visualization'):
        base = os.path.join(cells, section, 'full')
        manifest[section] = [f'{section}/full/{rel}'
                             for rel in listdir(base)] if os.path.isdir(base) else []
        print(f'{section}: {len(manifest[section])} files')

    out = os.path.join(ROOT, 'dh', 'dhay', 'overlay-manifest.json')
    try:
        with open(out, 'w') as f:
            json.dump(manifest, f, indent=1)
            f.write('\n')
    except OSError as e:
        print(f'error: cannot write {out}: {e}', file=sys.stderr)
        sys.exit(1)
    print('wrote', out)


if __name__ == '__main__':
    main()
