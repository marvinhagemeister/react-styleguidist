const path = require('path');

module.exports = {
	title: 'Style guide example',
	components: './components/**/[A-Z]*.js',
	updateWebpackConfig(webpackConfig) {
		const dirs = [
			path.resolve(__dirname, 'lib'),
			path.resolve(__dirname, 'styleguide'),
		];


		webpackConfig.module.loaders.push(
			{
				test: /\.jsx?$/,
				include: dirs,
				loader: 'babel',
			},
			{
				test: /\.css$/,
				include: dirs,
				loader: 'style!css?modules&importLoaders=1',
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
