FROM node:alpine as base

ARG ENV

ENV NODE_ENV=${ENV}
LABEL ENV=${ENV}

RUN apk update && apk --no-cache add curl libwebp libwebp-tools

ENV DB_NAME=${ENV}
ENV DB_HOST=database
ENV DB_PORT=5432
ENV DB_USERNAME=webserver
ENV DB_PASSWD=123456

ENV DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}

ENV PORT=80
EXPOSE ${PORT}

HEALTHCHECK --interval=5s --timeout=10s --start-period=5s --retries=3 CMD [ "sh", "-c", "curl -f http://localhost:${PORT} || exit 1" ]

FROM base as loading-stage

WORKDIR /project

COPY package.json package-lock.json ./

RUN npm config set registry https://registry.npmjs.org/

RUN mkdir node_modules
RUN [ "sh", "-c", "npm ci", "--no-audit" ]

COPY node_modules/.prisma/client ./node_modules/.prisma/client
COPY ./prisma ./prisma
COPY ./ ./

FROM loading-stage as dev

ENTRYPOINT [ "npm", "run", "dev" ]

FROM loading-stage as migrate-development

CMD [ "npx", "prisma", "migrate", "dev" ]

FROM loading-stage as reset-development

CMD [ "npx", "prisma", "migrate", "reset" ]


FROM loading-stage as prod

ENTRYPOINT [ "npm", "run", "start" ]

FROM loading-stage as migrate

CMD [ "npx", "prisma", "migrate", "deploy" ]