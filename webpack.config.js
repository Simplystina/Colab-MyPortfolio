module.exports = {
    // other config settings...
    module: {
      rules: [
        {
          test: /\.jsx?$/, // This regex matches both .js and .jsx files
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
    }
  };
  