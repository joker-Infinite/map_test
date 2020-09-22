module.exports = {
  devServer: {
    port: 8080 // 端口号配置
  },
  configureWebpack: {
    externals: {
      AMap: "window.AMap", //加这个！！
      AMapUI: "AMapUI"
    }
  },
  lintOnSave: false
};
