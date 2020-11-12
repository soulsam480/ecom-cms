module.exports = {
  // If you are deploying to github pages repo without a custom
  // domain name set publicPath: '/repo-name/'

  // If deploying to custom domain on github pages set publicPath: '/'
  publicPath: "/",
  devServer: {
    port: 8082,
  },
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {},
      },
    },
  },
};
