# Use official Node.js image as a base
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port the app will run on
EXPOSE 5173

# Command to run the app
CMD ["npm", "run", "dev"]
