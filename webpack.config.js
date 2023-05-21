const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    new BundleAnalyzerPlugin(),
  ],
};

// The "entry" object tells Webpack where's the "entry point" of the project, which has to refer to all of the other project assets

// The "output" object tells Webpack where to output the final distribution code. It "hashes" file path, in order to prevent caching issues when the users reload the final, updated app. The clean: true option tells Webpack to clean any previous builds

// The "module" object tells Webpack which loaders to activate (in this case - all relevant SASS loaders)

// The "plugins" array tells Webpack which plugins to use (in this case it's the HTML Webpack Plugin). This plugin allows us to use the <%= %> syntax to set dynamic values in our dist HTML using the values inside the plugins array

// The "devServer" object defines the "dev" script in package.json, which defines the parameters for outputting the final developed app. devServer defines (amongst other things) "open" and "hot", meaning that it will display a preview of the app + update it on any change

// After defining devServer, to build the app we need to run: npm run build, and to develop\preview the app we need to run: npm run dev

// The "devtool: 'source-map'" option creates a js.map file on every build, which can be used for debugging in the chrome dev tools (under "sources")

// In order to make our app backwards-compatible to older browsers, we need to install Babel and to add it to the Webpack config (using the command npm i -D babel-loader @babel/core @babel/preset-env). After that, we need to add the Babel options to the module object
