FROM node:12

WORKDIR /app
RUN mkdir /app/client/
RUN mkdir /app/server/

COPY ./client/package*.json ./client/
RUN cd ~/app/client && npm install

COPY ./server/package*.json ./server/
RUN cd ~/app/server && npm install

COPY . ./app
EXPOSE 4200

RUN cd ~/app/client && npm start
RUN cd ~/app/server && npm run start:watch
