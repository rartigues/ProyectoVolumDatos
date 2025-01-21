# Use Node.js official slim image
FROM node:18-slim

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Create non-root user
RUN adduser --disabled-password --gecos "" nodeuser
USER nodeuser

# Expose port
EXPOSE 9911

# Start app
CMD [ "node", "server.js" ]