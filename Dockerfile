FROM node:9-alpine
WORKDIR /usr/src/app
ADD dist/LetsPlayMusic-App/index.html  /usr/src/app/dist/LetsPlayMusic-App
RUN npm install
RUN npm install http-server -g
CMD ["http-server", "-p", "4200"]