module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	silent: false,
	testMatch: ["**/__tests__/**/*.test.ts(x)"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	setupFilesAfterEnv: ["<rootDir>/src/__tests__/setupEnzyme.ts"],
};
