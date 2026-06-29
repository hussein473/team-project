FROM node:26.4.0-bookworm-slim

WORKDIR /usr/src/Team_Project

COPY Scripts/frontend/package.json Scripts/frontend/package-lock.json Scripts/ /usr/src/Team_Project/

RUN npm ci --omit=dev

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "echo","Hello Oboy everything is done now"]