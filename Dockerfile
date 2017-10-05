FROM node:8-alpine

ENV NODE_ENV=production

WORKDIR /app/

ADD . /app
WORKDIR /app

CMD ["node", "server"]