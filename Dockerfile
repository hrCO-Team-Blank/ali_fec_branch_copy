FROM node:alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start"]