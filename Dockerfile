FROM node:alpine
# Create app directory
RUN mkdir -p /app

# Change folder
WORKDIR /app

# Copying source files
COPY . .

# Installing dependencies
RUN npm install

# Building app
RUN npm run build

# Running the app
ENTRYPOINT ["npm", "run", "start"]