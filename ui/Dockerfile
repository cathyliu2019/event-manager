FROM node:10.16

RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install

CMD ["npm", "start"]