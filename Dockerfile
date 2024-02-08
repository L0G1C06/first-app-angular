FROM node:alpine

WORKDIR /usr/src/app

COPY db.json /usr/src/app

RUN npm install -g @angular/cli

RUN npm install -g json-server

CMD ["json-server", "--watch", "db.json"]