#!/usr/bin/env sh
npx create-nx-workspace@latest weski \
  --appName=web-app \
  --preset=react-express \
  --npmScope=weski \
  --nx-cloud=false \
  --linter=eslint \
  --style=@emotion/styled && \
cd weski/ && \
npm install -D @nrwl/nest
npm i axios --force && \
npm i -D json-server --force && \
npm i -D concurrently --force && \
npm i @material-ui/core --force && \
nx g remove api
nx g @nrwl/nest:app api
nx g lib core-data --component=false && \
nx g lib core-state --component=false && \
nx g lib material --component=false && \
nx g slice resorts \
    --project core-state \
    --directory resorts \
    --no-interactive \
    --facade && \
nx g slice offers \
    --project core-state \
    --directory offers \
    --no-interactive \
    --facade && \
nx g c resorts  --export=false --routing=true --style=@emotion/styled && \
nx g c resorts-list --directory=resorts --export=false --routing=true --style=@emotion/styled && \
nx g c resort-details  --directory=resorts  --export=false --routing=true --style=@emotion/styled && \
nx g c offers  --export=false --routing=true --style=@emotion/styled && \
nx g c offers-list --directory=offers --export=false --routing=true --style=@emotion/styled && \
nx g c offer-details  --directory=offers  --export=false --routing=true --style=@emotion/styled && \
nx g c home  --export=false --routing=true --style=@emotion/styled && \
mkdir server && touch server/db.json && \
npx concurrently "npm start" "npm start api"
