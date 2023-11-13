FROM node:16.18.1-bullseye-slim AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci --silent

RUN npm run build


FROM node:16.18.1-bullseye-slim

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/build build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "80"]