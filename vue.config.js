module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/web/app/'
    : '/',
  outputDir: 'app',
  devServer: {
    https: true,
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "@/styles/shared.scss";',
      },
    },
  },
};
