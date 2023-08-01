# Stage 0: build and compile the frontend
# Out dist should be at /app/dist
FROM node:current-alpine as build-stage
WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install

ARG API_KEY
ARG BE_URL

ENV VITE_BE_URL=${BE_URL}
ENV VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${API_KEY}

RUN VITE_BE_URL=${VITE_BE_URL} VITE_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${API_KEY} pnpm build

# Step 1: copy built React app into base NGINX image
FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html