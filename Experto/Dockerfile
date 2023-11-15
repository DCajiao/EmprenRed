FROM node:18-alpine
ENV NODE_ENV=production
WORKDIR ./Experto
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .