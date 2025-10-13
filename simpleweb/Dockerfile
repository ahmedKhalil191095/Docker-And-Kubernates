# Run these commands to build and run the Docker container
# docker build -t my-node-app .
# docker run -p 3000:3000 my-node-app

# Specify a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/app
# Copy application files, first ./ refers to our local directory, second ./ refers to the container working directory
COPY ./package.json ./
# Install Some Dependencies
RUN npm install
COPY ./ ./

# Default Command to run the application
CMD ["npm", "start"]