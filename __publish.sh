# Instalar os pacotes
yarn install

# Fazer o build da aplicação
npm run build

# Cria uma nova branch gh-pages se não existir
git checkout --orphan gh-pages

# Limpa todos os arquivos na branch gh-pages
git rm -rf . 
git rm -rf .next
git rm -rf node_modules
git rm -rf src

# Copia os arquivos gerados na pasta 'out'
cp -r out/* .
git rm -rf out

# Adiciona e comita os arquivos
git add .
git commit -m "Deploy to GitHub Pages"

# Força o push para a branch gh-pages
git push origin gh-pages --force

# Volta para a branch original
git checkout main
