FROM node:10.13-alpine

WORKDIR /home/app
COPY . .

RUN npm install
CMD node index.js