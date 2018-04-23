'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate( {

	devtool: 'source-map',

	//funcionar em todos os so
	//__dirname - global do node
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		path.join(__dirname, 'src', 'index')
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	plugins: [
		//para que o webpack consiga fazer o hot reload
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		//antes de rodar o babel
		preLoaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
			loader: 'standard'
		}],

		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			include: /src/,
			loader: 'babel'
		}]
	}
} )