# https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/


FROM node:14.21.2-bullseye as build

WORKDIR /app/client
COPY ./client/package*.json ./

WORKDIR /app/server
COPY ./server/package*.json ./


WORKDIR /app/client
RUN npm install --loglevel verbose

WORKDIR /app/server
RUN npm install --loglevel verbose


WORKDIR /app/client
COPY ./client .
RUN npm run build

WORKDIR /app/server
COPY ./server .


FROM node:14.21.2-bullseye

WORKDIR /usr/src/app

COPY --from=build /app/server/ .
COPY --from=build /app/client/build/ ./public

EXPOSE 3001

CMD [ "node", "bin/www" ]
