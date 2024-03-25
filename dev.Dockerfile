FROM node:lts-iron

RUN apt update && apt install -y netcat-traditional

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

COPY ./entrypoint.sh /

RUN chmod +x /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]