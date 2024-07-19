# Stage 1: Build the React app
FROM node:20.15.1-alpine3.19 AS build

WORKDIR /app

COPY portfolio-store/package*.json ./

RUN npm install

COPY portfolio-store ./

RUN npm run build

# Stage 2: Serve the React app
FROM node:20.15.1-alpine3.19

WORKDIR /app

# Install serve globally
RUN npm install -g serve

COPY --from=build /app/build ./build

# Copy environment variables file from Docker secrets
# Note: This won't work with React directly, usually managed with ENV in docker-compose or at runtime
COPY --from=secrets /run/secrets/my_api_url_secret /app/.env

EXPOSE 3000

CMD ["serve", "-s", "build"]
