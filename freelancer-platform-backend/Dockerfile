FROM node:20

WORKDIR /app

RUN apt-get update && apt-get install -y netcat-openbsd

COPY package*.json ./
RUN npm install

COPY . .

RUN chmod +x start.sh

EXPOSE 5000

CMD ["sh","./start.sh"]