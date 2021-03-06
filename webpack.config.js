const path = require('path');

module.exports = {
	entry: './client/app.jsx',
	output: {
	  filename: 'bundle.js',
	  path: path.join(__dirname, '/public')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015', 'react'] },
				}],
			  }
		]
	}
}