FROM node:10-alpine

WORKDIR /app

# Copy package.json and package-lock.json, so that these layer will be cached if no change of package.json
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Run again npm install, npm will check through all updated package need to download again, it run after the cache layer of package.json
RUN npm install

# Building app
RUN npm run build

EXPOSE 3000

CMD npm run start
