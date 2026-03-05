# check=skip=SecretsUsedInArgOrEnv

FROM node:25-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --frozen --prefer-offline --no-audit --no-fund --fetch-retries=5 --fetch-retry-factor=2

FROM node:25-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

FROM node:25-alpine AS runner

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs
WORKDIR /app

LABEL org.opencontainers.image.title="ManghiDev_WebSite" \
    org.opencontainers.image.description="" \
    org.opencontainers.image.authors="ManghiDev <contact@manghi.dev>" \
    org.opencontainers.image.version="1.0.0" \
    org.opencontainers.image.url="https://github.com/manghidev/MyWebSite" \
    org.opencontainers.image.vendor="ManghiDev" \
    org.opencontainers.image.licenses="GPL" \
    com.pid.kinnil.environment="production" \
    com.pid.kinnil.stack="Next.js" \
    com.pid.kinnil.node-version="25" \
    com.pid.kinnil.maintainer="ManghiDev" \
    com.pid.kinnil.base-image="node:25-alpine"

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package*.json ./

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

USER nextjs
EXPOSE 3000
CMD ["sh", "-c", "npm run start"]