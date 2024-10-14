FROM node:22

# Set the working directory
WORKDIR /app

# Enable corepack
RUN corepack enable

# Copy project
COPY . .

# Install dependencies
RUN yarn install

# Build the project
RUN yarn build

# Copy files out of the container to a static directory
CMD sleep 2 && rm -rf /export/* && cp -r /app/build/* /export/