FROM node:latest
WORKDIR /app
COPY . .
ENV PORT=3000
RUN npm install
EXPOSE $PORT
ENTRYPOINT [ "node", "server.js" ]