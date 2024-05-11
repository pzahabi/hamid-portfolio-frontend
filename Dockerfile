FROM node:lts-alpine as build

# Set the working directory in the container
WORKDIR /frontendapp

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight Node.js image to run the application
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /frontendapp

# Copy the build files from the previous stage to the current stage
COPY --from=build /frontendapp/ ./

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "start"]