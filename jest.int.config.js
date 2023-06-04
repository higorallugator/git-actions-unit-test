const rootConfig = require('./jest.config.js');

module.exports = {
  ...rootConfig,
  ...{
    displayName: 'Integration Tests',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      'src/api/',
      '__tests__/',
    ],
    testMatch: [
      '**/__tests__/**/*.int.(spec|test).[jt]s?(x)',
    ],
  },
};
