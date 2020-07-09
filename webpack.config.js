const path = require('path');
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'webpack-numbers.js',
		library: 'webpackNumbers',
		libraryTarget: 'umd'

	},
	externals: {
		lodash: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_'
		}
	},
	plugins: [
		new CleanWebpackPlugin()
	]
};
