# Motion Bank online scores — static site served by nginx
#
# Build:   docker build -t motionbank-scores .
# Run:     docker run --rm -p 8080:80 motionbank-scores
#          → http://localhost:8080/            (landing page)
#            http://localhost:8080/dh/         (Using the Sky)
#            http://localhost:8080/jbmf/       (Seven Duets)
#            http://localhost:8080/two/        (TWO)
#
# NOTE: the self-hosted media (~14 GB of recordings, vimeo clips and text
# cells) is NOT baked into the image — the archive is too large for CI
# build runners. The container's entrypoint (docker/media-entrypoint.sh)
# downloads the archive from $MEDIA_URL on first start, verifies it
# against the published SHA-256 checksum and extracts it; a volume mounted
# on /usr/share/nginx/html/media persists it across container recreation
# (see README "Media self-hosting"). Set MEDIA_DOWNLOAD=0 to skip.

FROM nginx:1.27-alpine

# Site configuration: gzip, cache headers, JSON support
COPY docker/nginx-default.conf /etc/nginx/conf.d/default.conf

# Static site: score front-ends, JSON data, uploads/images, landing page,
# vendored child modules (former lab.motionbank.org embeds)
COPY index.html robots.txt sitemap.xml 50x.html /usr/share/nginx/html/
COPY dh    /usr/share/nginx/html/dh
COPY jbmf  /usr/share/nginx/html/jbmf
COPY two   /usr/share/nginx/html/two
COPY api   /usr/share/nginx/html/api
COPY assets /usr/share/nginx/html/assets
COPY static /usr/share/nginx/html/static
COPY system /usr/share/nginx/html/system
COPY modules /usr/share/nginx/html/modules
# The /dh poster fallback is not part of the media archive — ship it from
# git, so even media-less containers (MEDIA_DOWNLOAD=0) show posters.
COPY assets/images/dh-missing-poster.jpg /usr/share/nginx/html/media/dh/app/cells/poster/full/missing.jpg

# Media is downloaded/extracted on first container start (see NOTE above).
COPY docker/media-entrypoint.sh /media-entrypoint.sh
RUN chmod +x /media-entrypoint.sh
ENTRYPOINT ["/media-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1
