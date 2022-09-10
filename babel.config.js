module.exports = function (api) {
	api.cache(false);
	const config = {
		"presets": [
			["@babel/env", {
				"targets": {
					"browsers": [
						"last 4 versions",
						"IE 11",
						'Chrome >= 49',
						'Firefox >= 45',
						'Safari >= 10',
						'Edge >= 13',
						'iOS >= 10',
						'Electron >= 0.36'
					]
				}
			}],
			// "@babel/stage-0"
		],
		plugins: [
			"@babel/plugin-transform-classes",
			"@babel/plugin-transform-spread",
			"@babel/plugin-transform-destructuring",
			"@babel/plugin-transform-block-scoping",
			"@babel/plugin-transform-arrow-functions",
			"@babel/plugin-transform-template-literals",
			"@babel/plugin-transform-computed-properties",
			"@babel/plugin-transform-shorthand-properties"
		],
	};
	return config;
};