FROM endeveit/docker-jq AS deps

# https://stackoverflow.com/a/58487433
# To prevent cache invalidation from changes in fields other than dependencies

COPY package.json /tmp

RUN jq '{ dependencies, devDependencies }' < /tmp/package.json > /tmp/deps.json

FROM node:16-alpine3.14 as webpack

WORKDIR     /opt/node_app/app
COPY        --from=deps /tmp/deps.json ./package.json
RUN         npm install

ARG         NODE_ENVIRONMENT=production
ENV         NODE_ENV=$NODE_ENVIRONMENT

COPY        . .

