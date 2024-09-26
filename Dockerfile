FROM node:20.17.0-bullseye-slim AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build


FROM nginx:1.27.0-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf