# Use an explicit LTS version of Node on Alpine Linux for a smaller image footprint
FROM node:22-alpine

# Optimize Node for production
ENV NODE_ENV=production

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy dependency manifests first to leverage Docker layer caching
COPY package*.json ./

# Install only production dependencies (skips devDependencies)
RUN npm ci --only=production

# Copy the rest of your application source code
COPY . .

# Expose the application's runtime port
EXPOSE 3000

# Set the execution user to the pre-configured, low-privilege 'node' user for security
USER node

# Start the application directly with Node (avoiding npm start wrappers to handle OS signals correctly)
CMD ["node", "index.js"]
