rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update deploy' &&
git remote add origin &&
git branch -m main &&
git push -f -u origin main &&
cd ..