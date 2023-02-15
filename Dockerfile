FROM node:16.17.0-bullseye-slim AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci --omit=dev

RUN npm run build


FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html