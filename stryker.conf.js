/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'perTest',
  mutate: [
    'src/**/*.js',
    '!src/**/*.test.js',
    '!src/**/*.spec.js'
  ],
  jest: {
    projectType: 'custom',
    config: {
      testMatch: ['**/test/**/*.test.js'],
      coverageReporters: ['lcov', 'text']
    }
  },
  thresholds: {
    high: 80,
    low: 70,
    break: 60
  }
};

