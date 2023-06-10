const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "cart",
            filename: "remoteEntry.js",
            exposes: {
                "./CartIndex": "./src/bootstrap",
            },
            shared:["vainglory-hero-names"],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
}