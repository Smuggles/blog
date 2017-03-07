module.exports = {
  entry: './static/js/app/app.js',
  output: {
    path: __dirname + '/static/js/',
    filename: "bundle.js"
  },
  watch: true,
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
