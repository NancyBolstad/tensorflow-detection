module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  setupFiles: ['./test/jestSetup.ts', 'jest-localstorage-mock'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  modulePathIgnorePatterns: ['dist'],
  globals: {
    window: {
      location: {
        hostname: "localhost"
      }
    },
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
