FROM node:19-alpine

WORKDIR /app/server

EXPOSE 5122

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]
