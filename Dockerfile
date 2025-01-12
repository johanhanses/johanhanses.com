FROM node:22-alpine AS development-dependencies-env
COPY . /app
WORKDIR /app
RUN npm ci

FROM node:22-alpine AS production-dependencies-env
COPY ./package.json package-lock.json /app/
WORKDIR /app
RUN npm ci --omit=dev

FROM node:22-alpine AS build-env
COPY . /app/
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
WORKDIR /app
RUN npm run build

FROM node:22-alpine
# Install SQLite
RUN apk add --no-cache sqlite

# Create app directory and set permissions
RUN mkdir -p /app/data && \
    chown -R node:node /app

# Copy application files
COPY ./package.json package-lock.json /app/
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=build-env /app/build /app/build

# Set working directory
WORKDIR /app

# Switch to non-root user
USER node

# Define volume for persistent data
VOLUME ["/app/data"]

# Set environment variables
ENV NODE_ENV=production \
    NODE_OPTIONS=--experimental-sqlite

# Direct command with full path to binary
CMD ["./node_modules/.bin/react-router-serve", "./build/server/index.js"]
