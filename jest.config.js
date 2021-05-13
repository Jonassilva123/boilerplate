/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorPatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
};
