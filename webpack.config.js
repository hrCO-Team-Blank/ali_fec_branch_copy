
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: __dirname + '/client/src/index.jsx', // The entry point for the Application (Where ReactDOM.render is called)
  module: {
    rules: [
      {
        test: [/\.jsx$/], // Important that webpack compiles our React jsx files too
        exclude: /node_modules/, // Ignoring the node_modules so they are not sent over with our client bundle
        use: {
          loader: 'babel-loader', // Allows Babel and Webpack to work together
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'] // Environment Presets... Not 100% what these do
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }

        }
      }]
  },
  output: { // IMPORTANT: This is where we set the bundle to be built into a folder
    filename: 'bundle.js', // The name of the file to build
    path: __dirname + '/client/dist' // Where Webpack should place the file
  }
}