FROM node:18-alpine

WORKDIR /app

COPY . /app

COPY package*.json /app/
COPY package-lock.json /app/


RUN npm install
RUN npm uninstall bcrypt
RUN npm install bcrypt
RUN npm run build

EXPOSE 3000

CMD ["npm","start"]