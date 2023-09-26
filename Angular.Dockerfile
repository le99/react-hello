# https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/


FROM node:16.20.2-bullseye as build

RUN npm install -g @angular/cli

WORKDIR /app/client
COPY ./angularClient/package*.json ./

WORKDIR /app/server
COPY ./server/package*.json ./


WORKDIR /app/client
RUN npm install --loglevel verbose

WORKDIR /app/server
RUN npm install --loglevel verbose


WORKDIR /app/client
COPY ./angularClient .
RUN ng build

WORKDIR /app/server
COPY ./server .


FROM node:16.20.2-bullseye

WORKDIR /usr/src/app

COPY --from=build /app/server/ .
COPY --from=build /app/client/dist/angular-client ./public

EXPOSE 3001

CMD [ "node", "bin/www" ]
