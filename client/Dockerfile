FROM node:19-alpine

WORKDIR /app/client

EXPOSE 5123

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]
