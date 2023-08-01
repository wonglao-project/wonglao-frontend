# Stage 0: build and compile the frontend
# Out dist should be at /app/dist
FROM node:current-alpine as build-stage
WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

ARG API_KEY
ARG BE_URL

RUN export VITE_BE_URL=${BE_URL}
RUN export VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${API_KEY}

RUN pnpm build

# Step 1: copy built React app into base NGINX image
FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html