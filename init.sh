#!/usr/bin/env sh
npx create-nx-workspace@latest weski \
  --appName=ang-app \
  --preset=angular-nest \
  --npmScope=weski \
  --nx-cloud=false \
  --linter=tslint \
  --style=scss && \
cd weski/ && \
npm i axios --force && \
npm i -D json-server --force && \
npm install -D @nrwl/react && \
npm i -D concurrently --force && \
npm i @material-ui/core --force && \
# nx g remove ang-app-e2e ang-app && \
nx g @nrwl/react:app web-app --style=emotion --routing && \
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
npx nx g @nrwl/react:component offers --routing --project web-app --style @emotion/styled --export && \
npx nx g @nrwl/react:component offers-list --routing --project web-app --style @emotion/styled --export && \
npx nx g @nrwl/react:component offer-details --routing --project web-app --style @emotion/styled --export && \
nx g c home  --export=false --routing=true --style=@emotion/styled && \
nx g @nrwl/nest:resource offers --project api
nx g @nestjs/schematics:resource resorts --source-root apps/api/src --type rest --crud true --no-interactive && \
nx g @nestjs/schematics:resource offers --source-root apps/api/src --type rest --crud true --no-interactive && \
mkdir server && touch server/db.json && \
npx concurrently "npm start" "npm start api"
