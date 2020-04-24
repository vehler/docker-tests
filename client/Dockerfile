FROM node:12

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./app
EXPOSE 4200

CMD ["npm", "start"]