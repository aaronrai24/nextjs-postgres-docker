FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose port
EXPOSE 4000

# Run in development mode (with hot reload)
CMD ["npm", "run", "dev"]
