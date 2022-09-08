'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const autoprefixer = require("autoprefixer");
const {
	VueLoaderPlugin
} = require('vue-loader')
const {
	CleanWebpackPlugin
} = require("clean-webpack-plugin");



module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: "[name].[contenthash:8].js",
		chunkFilename: "[name].[contenthash:8].js",
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		alias: {
			'vue': '@vue/runtime-dom',
			'vuex': 'vuex/dist/vuex.esm-bundler',
			'@': path.join(__dirname, 'src')
		}
	},
	module: {
		rules: [{
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader'
				}]
			},

			{
				test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
				loader: "file-loader",
				options: {
					name: "[name][contenthash:8].[ext]",
				},
			},
			{
				test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
				loader: "file-loader",
				options: {
					outputPath: "assets",
					esModule: false,
				},
			},
			{
				test: /\.s?css$/,
				use: [
					"vue-style-loader",
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false,
						},
					},
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash:8].css",
			chunkFilename: "[name].[contenthash:8].css",
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		compress: true,
		port: 8080
	},
	optimization: {
		moduleIds: "deterministic",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					priority: -10,
					chunks: "all",
				},
			},
		},
	}
}