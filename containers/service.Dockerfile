ARG NODE_VERSION=20.10.0

FROM node:$NODE_VERSION-alpine AS base

FROM base as deps

ARG PACKAGE_PATH

WORKDIR /app
COPY ./dist/$PACKAGE_PATH/package.json ./package.json
RUN yarn install --production

FROM base

ARG PACKAGE_PATH

ENV NODE_ENV production
ENV PORT 3333

USER node

WORKDIR /app
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY ./dist/$PACKAGE_PATH .

EXPOSE $PORT

CMD ["node", "main.js"]
