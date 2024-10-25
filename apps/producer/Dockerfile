FROM node:22-alpine3.19

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションコードのコピー
COPY . .

# TypeScriptのビルド
RUN npm run build

# アプリケーションの起動
CMD ["node", "dist/index.js"]
