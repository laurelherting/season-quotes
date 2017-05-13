import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: path.join(__dirname, 'src'),
};

export default {
  devtool: 'eval',
  entry: {
    app: './src/index',
    vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom'],
  },
  output: {
    path: PATHS.dist,
    filename: '[name].[chunkHash].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
        include: PATHS.src,
      },
      {
        test: /\.(eot|svg|ttf|png|jpg|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: 'url-loader?limit=1000',
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
  },
  plugins: [
    new ExtractTextPlugin('app.css'),
    function timestamp() {
      this.plugin('watch-run', (watching, callback) => {
        /* eslint-disable no-console */
        console.log('Begin compile at %s', new Date());
        callback();
        /* eslint-enable no-console */
      });
    },
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkHash].js',
      minChunks: Infinity,
    }),
    new HtmlPlugin({
      title: 'may-day',
      template: path.join(PATHS.src, 'index.html'),
      inject: true,
    }),
  ],
};
