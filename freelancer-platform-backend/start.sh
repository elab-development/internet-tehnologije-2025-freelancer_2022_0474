#!/bin/sh
set -e

echo "⏳ Waiting for MySQL..."

until nc -z mysql 3306; do
  sleep 1
done

echo "MySQL is up"

echo "Running migrations..."
npx sequelize-cli db:migrate

echo "Running seeders..."
npx sequelize-cli db:seed:all

echo "Starting backend..."
npm run dev