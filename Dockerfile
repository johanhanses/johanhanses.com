# Build stage
FROM node:22-alpine AS builder
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:22-alpine AS runner
RUN apk add --no-cache sqlite

# Create app directory and set permissions
WORKDIR /app
RUN mkdir -p data && chown -R node:node .

# Copy only necessary files
COPY --from=builder --chown=node:node /build/package*.json ./
COPY --from=builder --chown=node:node /build/node_modules ./node_modules
COPY --from=builder --chown=node:node /build/build ./build

# Switch to non-root user
USER node

# Define volume for persistent data
VOLUME ["/app/data"]

# Set environment variables
ENV NODE_ENV=production \
    NODE_OPTIONS=--experimental-sqlite \
    PORT=3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["./node_modules/.bin/react-router-serve", "./build/server/index.js"]
