# ベースイメージを指定
FROM node:14

# プロジェクトフォルダをコンテナ内の/appディレクトリにコピー
WORKDIR /app
COPY . .

# Node.jsの依存関係をインストール
RUN npm install

# アプリケーションを起動
CMD ["node", "server.js"]
