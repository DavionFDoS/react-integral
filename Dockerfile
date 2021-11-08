FROM node:16.11-alpine
# задайте рабочую директорию
WORKDIR /react-integral
# добавьте `/app/node_modules/.bin` в $PATH
ENV PATH /react-integral/node_modules/.bin:$PATH
# установите зависимости приложения
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# добавьте приложение
COPY . .
# запустите приложение
CMD ["npm", "start"]