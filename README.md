# Fullwhere interview

## Pre-requisites

- _(Optional)_ [Volta](https://volta.sh/) to manage Node.js and PNPM versions seamlessly
- [Node.js](https://nodejs.org/en/)
- [PNPM](https://pnpm.io/)
- [Docker](https://www.docker.com/)

## Starting the API

1. Install dependencies: `pnpm install`
2. Start the database: `npm run start:db`
3. Start the API: `npm run start:api`
4. _(Optional)_ Seed the database: `npm run seed:db`

## Packaging the API to Docker

1. Build the artifact and package it: `npm run package:all`
2. Start the API with Docker: `npm run start:api:docker`
