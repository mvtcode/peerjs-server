FROM node:18.19-alpine3.19

WORKDIR /app
COPY . .
# COPY package*.json ./
RUN npm ci --only=production
RUN npm install pm2 -g

CMD ["pm2-runtime", "start", "index.js"]