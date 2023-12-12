FROM --platform=linux/arm64 node:latest

# Copy files into the container
WORKDIR /app
COPY . .

# Set environment variables
ENV PORT=3000

# Install npm dependencies
RUN npm install

# Expose the specified port
EXPOSE $PORT

# Copy the Python script into the container
COPY input.py /app/input.py 

# Set the entrypoint to the bash script
COPY entrypoint.sh /app/entrypoint.sh

# Grant execute permissions to the entrypoint script
RUN chmod +x /app/entrypoint.sh

# Set the entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]
