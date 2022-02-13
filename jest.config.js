const config = {
    clearMocks: true,
    collectCoverage: true,
    setupFilesAfterEnv: ["<rootDir>/src/test-utils/setup.tsx"],
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/src/test-utils/file.ts",
        "\\.(css)$": "identity-obj-proxy",
    },
    testEnvironment: "jsdom",
    transform: {
        "\\.(js|jsx|ts|tsx)$": [
            "babel-jest",
            {
                presets: ["next/babel"],
            },
        ],
    },
    verbose: true,
}

module.exports = config
