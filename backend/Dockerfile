FROM node:15.11.0-alpine

RUN mkdir /backend

WORKDIR /backend

ENV PATH /backend/node_modules/.bin:$PATH

COPY package.json .

RUN npm install --no-cache
#RUN apk add --no-cache git

CMD ["npm", "run", "server"]