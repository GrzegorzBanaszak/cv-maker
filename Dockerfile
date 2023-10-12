FROM node:18-alpine
WORKDIR /usr/app

COPY package.json ./
RUN npm i install
ENV PATH=/usr/app/node_modules/.bin:$PATH

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]