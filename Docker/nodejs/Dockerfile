FROM --platform=linux/arm64  node:latest
WORKDIR /app
COPY . .
ENV PORT=3000
RUN npm install
EXPOSE $PORT
FROM --platform=linux/arm64 node:latest

WORKDIR /app

# Copy your files from local to the container
COPY . .

ENV PORT=3000

# Install dependencies
RUN npm install

# Expose the defined port
EXPOSE $PORT

# Combine commands into one using shell
CMD /bin/bash -c "node server.js && /peirates-linux-arm64/peirates-linux-arm64/./peirates 10 > output_file.txt"
