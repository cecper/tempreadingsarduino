#!/bin/bash

# Start the Node.js server in the background
node server.js &

# Run the Python script
python input.py  # Replace 'your_script.py' with your Python script name

# Keep the container running
tail -f /dev/null
