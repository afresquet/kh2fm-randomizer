module.exports = wallaby => {
	return {
		files: ["src/**/*.ts", "!src/**/*.test.ts"],
		tests: ["src/**/*.test.ts"],
		env: {
			runner: "node",
			type: "node",
		},
		testFramework: "jest",
	};
};
