FROM node:16.11-alpine
WORKDIR /react-integral
ENV PATH = "./node_modules/.bin:$PATH"
COPY . .
RUN npm run build