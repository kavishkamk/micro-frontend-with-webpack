const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { container } = require('webpack');

module.exports={
    mode: "development",
    devServer: {
        port: 8080,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                product: "product@http://localhost:8081/remoteEntry.js",
                cart: "cart@http://localhost:8082/remoteEntry.js",
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
};