FROM node:8.9.1-alpine

WORKDIR /usr/src/app

RUN npm install

EXPOSE 3000

CMD npm start
