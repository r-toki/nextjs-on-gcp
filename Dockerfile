# ref: https://github.com/vercel/next.js/tree/canary/examples/with-docker
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

FROM base AS builder
ARG _BUILD_CMD
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn $_BUILD_CMD

FROM base AS runner
ARG _ENV_PATH
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY $_ENV_PATH ./.env
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD ["node", "server.js"]
