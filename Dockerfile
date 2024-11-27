FROM oven/bun:1-slim 

WORKDIR /app 

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile --ignore-scripts

COPY . . 

ENV PORT=3030

RUN bun run build

EXPOSE 6970

CMD ["bun", "run","serve"]
