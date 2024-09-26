Deployed [here](https://lively-sky-3924.fly.dev/)

## Project description

The task was to build a frontend application which displays the data fetched from [restcountries](https://restcountries.com/v3.1/all) API.
The app displays the countries with pagination chosen by the user. Using client side routing, the app navigates the browser to url specific to a chosen country and displays its details to the user.

## Run locally

1. `git clone https://github.com/joelhackinen/countries.git`
2. `cd countries`

### ... with Docker

3. `docker compose up -d --build`
4. exposed at `http://localhost:8080`

### ... with npm

3. `npm ci`
4. `npm run dev`
5. exposed at `http://localhost:8080`

## Technologies used

- React
- TypeScript
- Redux Toolkit
- React Router (v6)
- Material UI
- Docker
- GitHub Actions for deployment
