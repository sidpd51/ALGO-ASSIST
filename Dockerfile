# Use an official Node.js runtime as the base image
FROM node:23

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Define the command to run the application
CMD ["npm", "run", "dev"]
