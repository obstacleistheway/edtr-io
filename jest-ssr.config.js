/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-commonjs */
const defaultConfig = require('./jest.config')

module.exports = {
  ...defaultConfig,
  testEnvironment: 'node',
  testRegex: '/__tests-ssr__/.*\\.[jt]sx?$'
}
