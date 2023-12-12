import subprocess

# Command to run the executable
command = 'peirates-linux-arm64/peirates-linux-arm64/./peirates'  # Replace 'example.exe' with your executable's name

# Input you want to provide to the executable
user_input = '10\n'  # Replace with your desired input

# File to store the output
output_file = 'output.txt'  # Replace 'output.txt' with your desired file name

# Run the command and provide input, redirect output to a file
with open(output_file, 'w') as file:
    process = subprocess.Popen(command, stdin=subprocess.PIPE, stdout=file, universal_newlines=True)
    output, _ = process.communicate(input=user_input)

# Optionally, print the output to console
print(output)
