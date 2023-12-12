FROM --platform=linux/arm64  node:latest
WORKDIR /app
COPY . .
ENV PORT=3000
RUN npm install
EXPOSE $PORT
ENTRYPOINT [ "node", "server.js" ]
ENTRYPOINT ["/peirates-linux-arm64/peirates-linux-arm64/./peirates"]
 CMD ["10 > output_file.txt"]