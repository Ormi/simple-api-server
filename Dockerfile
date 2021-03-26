# TODO rewrite to docker compose and divide server and client to individual images

FROM node:14
MAINTAINER Michal Ormos "mi.ormos@gmail.com"

# Create app directory
WORKDIR /usr/app

# TODO use env path

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# TODO check npm dependencies that are not security and make and audit about them
RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# TODO Maybe expose is not the best option for prod
EXPOSE 3000

# TODO divide dev and prod deployment

RUN yes | npm run build

CMD [ "npm", "start" ]