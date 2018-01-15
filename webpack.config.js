const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const extractCss = new ExtractTextPlugin({ filename: 'assets/styles/main.min.css', allChunks: true });
const html = new HtmlWebpackPlugin({ filename: 'index.html', template: './src/index.pug', hash: true });
const copyFiles = new CopyWebpackPlugin([{ from: 'src/assets/fonts', to: 'assets/fonts' }, { from: 'src/assets/images', to: 'assets/images' }]);
const writeFiles = new WriteFilePlugin();
const spriteLoader = new SpriteLoaderPlugin();

module.exports = {
  entry: './src/assets/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/main.min.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
        }),
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      }, {
        test: /\.pug$/,
        use: [{ loader: 'raw-loader' }, { loader: 'pug-html-loader' }],
      }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve('./src/assets/svg/sprite'),
        options: {
          extract: true,
          spriteFilename: './assets/svg/sprite.svg',
        },
      }, {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=100000'
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    stats: 'errors-only',
    open: true,
  },
  plugins: [
    html,
    extractCss,
    copyFiles,
    writeFiles,
    spriteLoader,
  ],
};
