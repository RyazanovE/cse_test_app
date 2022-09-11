module.exports = {
		presets: [
			["@babel/preset-env",
				{
					"useBuiltIns": "usage",
					"corejs": 3
				}
			],
		],
		plugins: [
			"@babel/plugin-transform-classes",
			"@babel/plugin-transform-spread",
			"@babel/plugin-transform-destructuring",
			"@babel/plugin-transform-block-scoping",
			"@babel/plugin-transform-arrow-functions",
			"@babel/plugin-transform-template-literals",
			"@babel/plugin-transform-computed-properties",
			"@babel/plugin-transform-shorthand-properties",
			"@babel/plugin-transform-for-of",
			"babel-plugin-loop-optimizer",
			["@babel/plugin-proposal-decorators",{"decoratorsBeforeExport":true}],
			"@babel/plugin-proposal-class-properties",
			"@babel/transform-runtime",
		],


};