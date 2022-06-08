
: build
pnpm docs:build

cd docs/.vitepress/dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:loafer-shu/one-blog.git main:gh-pages

cd -
