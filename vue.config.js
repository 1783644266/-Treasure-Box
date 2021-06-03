module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'api': '@/api',
        'views': '@/views',
      }
    }
  },
  devServer: {
    port: 3000,
    proxy: {
        '/api': {
          target: 'http://152.136.185.210:8000/api/w6',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
    }
}


}