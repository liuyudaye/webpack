const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  devServer: {
    port: 7080,
  },
  entry: './src/main.js',
  output: {
    clean: true,
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      //koader 的规则
      {
        test: /\.css$/i, //要处理的文件是什么
        // css-loader的作用是让webpack能够解析css文件
        // style-loader的作用可以把解析好的css文件插入到DOM中
        use: ['style-loader', 'css-loader'],
      },
      {
        // 处理less
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // 处理图片
        test: /\.(png|jpg|gif|jpeg)$/i,
        type: 'asset',
      },
      {
        // 不需要处理字体文件，直接原文件输出即可
        //所以使用的是asset/resource模式
        // asset/resource模式会直接引用原文件
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name].[hash:6][ext]',
        },
      },
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
}
