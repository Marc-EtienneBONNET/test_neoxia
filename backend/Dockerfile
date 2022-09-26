FROM node:17-alpine

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

EXPOSE 3001
EXPOSE 8000

CMD ["npm", "run", "start:dev"]