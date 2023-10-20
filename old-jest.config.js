module.exports = {
    // Load setup-tests.js before test execution
    preset: "jest-expo",
    transformIgnorePatterns: [
          "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
        ],
    verbose: false,
    //setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        "eslint.js",
        "./__snapshots__/"
    ],
    transform: {
          "^.+\\.[jt]sx?$": "babel-jest"
        },
    setupFiles: [
        "./node_modules/react-native-gesture-handler/jestSetup.js"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx}",
        "!**/coverage/**",
        "!**/node_modules/**",
        "!**/babel.config.js",
        "!**/jest.setup.js"
    ],

    // ...
  };