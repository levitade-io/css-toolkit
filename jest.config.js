module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/test/**/*.test.ts'],
    testPathIgnorePatterns: ['/node_modules/'],
};
