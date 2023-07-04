FROM node:18-alpine

WORKDIR /app

COPY . /app

COPY package*.json /app/

COPY package-lock.json /app/


RUN npm install

RUN npx update-browserslist-db@latest

RUN NODE_OPTIONS="--max-old-space-size=4096" npm run build

EXPOSE 3232

CMD ["npm","start"]`