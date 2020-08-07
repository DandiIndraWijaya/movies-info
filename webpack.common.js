const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
                    {
                        test: /\.css$/,
                        use: ['style-loader','css-loader']
                    },
                    {
                        test: [/\.jpg$/], use: "file-loader"
                    },
                    {
                        test: /\.(jpe?g|png|gif|svg)$/i,
                        use: [
                            'url-loader?limit=10000',
                            'img-loader'
                          ]
                    }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new BundleAnalyzerPlugin({
          generateStatsFile: true
      })
    ]
};