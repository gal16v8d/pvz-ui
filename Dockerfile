FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Specify the environment variables (replace with your own values)
ENV VITE_API_URL=http://localhost:8000
ENV VITE_APP_VERSION=0.0.1
ENV VITE_ENABLE_MOCKS=true

# Build the React app
RUN npm run build

# Expose the port on which the app will run
EXPOSE 5173

# Start the React app
CMD ["npm", "run", "dev:docker"]