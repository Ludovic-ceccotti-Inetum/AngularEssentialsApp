# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=24

FROM node:${NODE_VERSION}-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm ci
COPY . .
RUN npm install
RUN npm run build
EXPOSE 4200 49153
CMD ["npm", "start"]
