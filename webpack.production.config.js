const path=require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',    //production  , development
    devtool: 'eval-source-map',
    entry:  __dirname + "/src/index.js",	//The only entry
    output: {
        path: __dirname + "/",	//The place where the files after webpack.
        filename: "bundle.js"	//The file name of the output file after webpack
    },
    devServer: {
		contentBase: __dirname + "/",	//The directory where the page is loaded by the nodejs server
        historyApiFallback: true,	//no jump
        inline: true,	//Real-time refresh
        hot: true,
        port: "8080"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: [
                    //         "es2015",    //load css
                    //     ]
                    // }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true, // open css_modules
                            localIdentName: '[name]__[local]--[hash:base64:5]' // set format of css class
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
		new webpack.NamedModulesPlugin(),
        new webpack.BannerPlugin('All rights reserved.'), //annotation 
        new webpack.HotModuleReplacementPlugin()	//hot
    ],
}