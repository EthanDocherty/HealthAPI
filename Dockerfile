FROM node:17
ARG GIT_HASH
ENV GIT_HASH=$GIT_HASH
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD node index.js