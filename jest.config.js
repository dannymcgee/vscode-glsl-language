module.exports = {
	preset: "ts-jest",
	globals: {
		"ts-jest": {
			tsconfig: "tsconfig.spec.json",
		},
	},
	setupFilesAfterEnv: ["<rootDir>/src/grammar/testing/lib/serializers.ts"],
	testEnvironment: "node",
	rootDir: ".",
	snapshotResolver: "<rootDir>/src/grammar/testing/lib/resolver.js",
};
