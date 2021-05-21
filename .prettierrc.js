module.exports = {
	useTabs: true,
	tabWidth: 4,
	singleQuote: false,
	trailingComma: "all",
	arrowParens: "avoid",
	overrides: [
		{
			files: "*.json",
			options: {
				printWidth: 55,
			},
		},
	],
};
