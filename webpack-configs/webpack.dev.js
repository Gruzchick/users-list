const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');
const imageInlineSizeLimit = '10000';

const config = {
  mode: 'development',
  context: appDirectory,

  entry: ['./src/index.tsx'],
  bail: false,
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      // https://github.com/welldone-software/why-did-you-render/issues/85
      'react-redux': 'react-redux/lib',
      'react-router': 'react-router/umd/react-router.js',
      'react-query': 'react-query/dist/react-query.production.min.js',
    },
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       loader: 'eslint-loader',
      //       options: {
      //         formatter: 'stylish',
      //         emitWarning: true,
      //         cache: true,
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            compact: false,
          },
        },
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(appDirectory, 'public/index.html'),
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      formatter: 'basic',
      eslint: {
        files: path.resolve('./src/**/*.{ts,tsx}'),
        options: {
          cache: true,
          configFile: path.resolve(appDirectory, '.eslintrc'),
          cacheLocation: path.resolve(
            appDirectory,
            'node_modules/.cache/eslintcache',
          ),
        },
      },
    }),
    new StylelintPlugin({
      files: './src/**/*.{ts,tsx}',
      emitWarning: true,
      cache: true,
      cacheLocation: path.resolve(
        appDirectory,
        'node_modules/.cache/stylelintcache',
      ),
    }),
  ],
  devServer: {
    contentBase: path.resolve(appDirectory, 'dist'),
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
};

module.exports = config;
