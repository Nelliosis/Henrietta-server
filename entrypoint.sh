#!/bin/bash

set -e

echo "Waiting for database..."
echo DB_NAME: ${DATABASE_NAME}
echo DB_HOST: ${DATABASE_HOST}
echo DB_PORT: ${DATABASE_PORT}
while ! nc -z ${DATABASE_HOST} ${DATABASE_PORT}; do sleep 1; done
echo "Connected to database."

npm run migrate
npm run start:dev