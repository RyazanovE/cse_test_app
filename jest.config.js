module.exports = {
	"testEnvironment": "jsdom",
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},
	"moduleFileExtensions": ["js", "json", "vue"],
	"transform": {
		"^.+\\.js$": "babel-jest",
		"^.+\\.vue$": "@vue/vue3-jest"
	},
	"moduleNameMapper": {
		"^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
		"^@/(.*)$": "<rootDir>/src/$1",

		
	}
}