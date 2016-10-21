const path = require('path');

module.exports = {
	title: 'React Style Guide Example',
	sections: [
		{
			name: 'Example Section',
			components: './components/**/[A-Z]*.js',
		},
	],
	updateWebpackConfig(webpackConfig) {
		const dir = path.resolve(__dirname, 'lib');
		webpackConfig.module.loaders.push(
			{
				test: /\.jsx?$/,
				include: dir,
				loader: 'babel',
			},
			{
				test: /\.json$/,
				include: path.dirname(require.resolve('dog-names/package.json')),
				loader: 'json',
			}
		);
		return webpackConfig;
	},
};
