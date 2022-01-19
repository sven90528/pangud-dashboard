const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // baseUrl: "./",
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这 // 调整内部的 webpack 配置。 // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md

  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: () => {}, // 配置 webpack-dev-server 行为。
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api/": {
        target: "https://api-athena.changhong.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api/": "/api/v1/",
        },
      },
    },
  },
};
