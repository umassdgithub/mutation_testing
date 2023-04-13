const { default: gradeToLetter } = require('./gradeToLetter.js');

module.exports = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  coverageAnalysis: 'all',
  mutate: ['bmi.js','gradeToLetter.js'],
  jest: {
    config: require('./jest.config.cjs'),
  },
};
