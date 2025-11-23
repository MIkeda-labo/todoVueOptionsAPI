# todoVueOptionsAPI

Vue02　→　Vue03　と書き換えたときにうまくいかないと思ったら、importしていくには、CDNの読み込みだけではだめで、viteのインストールが必要だった。

viteを入れると、CDNの読み込みは不要になるので、消去。

プロジェクト作成時に、vite付きのプロジェクトを作成すれば簡単だが、すでにプロジェクトを作成済だったため、

vite　と @vitejs/plugin-vueをインストール

npm install vite @vitejs/plugin-vue 

プロジェクト直下に vite.config.jsファイルを作成し

touch vite.config.js

必要事項を記載。ポート番号は3000。

index.htmlをエントリーポイントとすることとし、

<script type="module" src="/src/main.js"></script>　　に変更

package.json に下記追記

"scripts": {

  "dev": "vite",
  
  "build": "vite build",
  
  "serve": "vite preview"
  
}

その後

npm run dev

を行い、http://localhost:3000/  にアクセス

（ここで通常はできるが、ここで、vite使用するときは、Nodeバージョンを上げる必要があるとのエラー出現。

Windows環境なので、NVSを.msiでダウンロードしインストールしたが、シェルを読み込まないと、nvs addや nvs useが使えないとのエラーが出現。どこに入ったかは分からない仕様になっている。

別の方法として、git cloneを用いて　NVSインストール、およびシェルの読み込みを行った。

git clone https://github.com/jasongin/nvs ~/.nvs

. ~/.nvs/nvs.sh install

）


