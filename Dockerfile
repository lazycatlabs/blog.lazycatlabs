# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM imbios/bun-node:latest-21-slim AS base
# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags

RUN apt-get update -qq && \
  apt-get install -y build-essential pkg-config python-is-python3


WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile  --production --ignore-scripts

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
RUN bun test
RUN bun run build

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease  /usr/src/app/.next ./.next
COPY --from=prerelease  /usr/src/app/public ./public
COPY --from=prerelease /usr/src/app/package.json .

# run the app
USER bun
EXPOSE 6970
ENV PORT 3030
ENTRYPOINT [ "bun", "run", "serve" ]