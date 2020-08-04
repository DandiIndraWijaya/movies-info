const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
                    {
                        test: /\.(sass|scss|css)$/,
                        use: ['style-loader','css-loader','sass-loader']
                    },
                    {
                        test: [/\.(jpg|svg|eot|woff|woff2|ttf)$/], use: "file-loader"
                    }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};