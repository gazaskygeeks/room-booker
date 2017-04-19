module.exports = {
  entry: {
    bundle: ['./src/frontEnd/index.jsx']
  },
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js',
    publicPath: 'public'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }
    ]
  }
};
