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
                        test: [/\.css$/], use: "style-loader"
                    },
                    {
                        test: [/\.css$/], use: "css-loader"
                    },
                    {
                        test: [/\.jpg$/], use: "file-loader"
                    }
             ,
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};