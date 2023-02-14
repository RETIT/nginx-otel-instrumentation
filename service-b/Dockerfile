FROM node:16
WORKDIR /app
RUN npm install express
COPY app.js .
EXPOSE 8080
CMD [ "node", "app.js" ]