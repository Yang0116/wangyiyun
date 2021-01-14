var proxy = require('http-proxy-middleware');
module.exports = {
    devServer: {
        proxy: {
            '^/api': { // api表示当前项目请求的key
                target: 'http://localhost:3000', // 代理服务器路径
                pathRewrite: { '^/api': '/' }, // 重写路径
                changeOrigin: true
            }
        }
    }
}