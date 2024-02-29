# Stage 1: Build Stage
FROM node:20.11.1 AS build

ARG PORT

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production Stage
FROM node:20.11.1-alpine3.18

WORKDIR /app

# Copy built files from the build stage to the production image
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json

# Container startup command for the web server (nginx in this case)
CMD ["npm", "start"]