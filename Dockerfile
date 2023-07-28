FROM node:current-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g pnpm && \
  pnpm install

COPY . .

RUN pnpm build

CMD [ "pnpm", "run dev" ]

EXPOSE 8080
