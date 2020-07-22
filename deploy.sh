#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

echo 'admin.sambitsahoo.com' > CNAME

git init

git config user.email "soulsam480@hotmail.com"
git config user.name "sambit sahoo"

git add -A
git commit -m 'deploy'



git push -f git@github.com:soulsam480/ecom-cms.git master:gh-pages

cd -