module.exports = wallaby => {
	return {
		files: ["src/**/*.ts"],
		tests: ["src/**/*.test.js"],
		env: {
			runner: "node",
			type: "node",
		},
		testFramework: "jest",
	};
};
