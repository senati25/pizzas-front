# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:14.16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# RUN npm run build

CMD [ "npm", "run", "dev" ]
