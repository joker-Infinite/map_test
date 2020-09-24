module.exports = {
  devServer: {
    port: 8080 // 端口号配置
  },
  configureWebpack: {
    externals: {
      AMap: "window.AMap",
      AMapUI: "AMapUI"
    }
  },
  lintOnSave: false
};
