FROM node:10-slim

WORKDIR /app

# Copy package.json and package-lock.json, so that these layer will be cached if no change of package.json
COPY package*.json ./
RUN npm install

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run server