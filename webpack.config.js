const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
   entry: './src/index.tsx',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'build.js',
      publicPath: 'dist/',
   },

   resolve: {
      extensions: ['.ts', '.tsx', '.js'],
   },

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: 'ts-loader',
         },
         {
            test: /.(c|sc|sa)ss$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     hmr: process.env.NODE_ENV === 'development',
                  },
               },
               'css-loader',
               'sass-loader',
            ],
         },
         {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
               {
                  loader: 'file-loader',
               },
            ],
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         template: 'index.html',
      }),
   ],

   devServer: {
      historyApiFallback: true,
      overlay: true,
      port: 8000,
   },
};
