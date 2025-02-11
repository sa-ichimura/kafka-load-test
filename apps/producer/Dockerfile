FROM node:22-alpine3.19

WORKDIR /app


# アプリケーションコードのコピー
COPY . .

# 依存関係のインストール
RUN npm install

# TypeScriptのビルド
RUN npm run build

# アプリケーションの起動
CMD ["node", "dist/index.js"]
