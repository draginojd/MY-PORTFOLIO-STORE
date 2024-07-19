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

# Expose the port the app runs on
EXPOSE 3000

# Default command to run the app
CMD ["serve", "-s", "build"]
