const webpack = require('webpack');
const common= {
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
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }
    ]
  },
};
const development = {
  devtool:'inline-source-map'
};
const production = {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]};
module.exports =
  Object.assign(
    common,
     process.env.NODE_ENV === 'production'
      ? production
      : development
  );
