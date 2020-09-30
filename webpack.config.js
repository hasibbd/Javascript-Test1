/*const path = require('path');

module.exports = {
  entry: ["@babel/polyfill", './src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }, 
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: 'babel-loader',
        }
     
    ]
  },



  mode: "development",
  devServer: {
      contentBase: path.join('./dist'),
      compress: true,
  }
};
*/


const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  devServer: {
    open: true,
  }
};