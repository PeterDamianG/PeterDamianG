export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  coverageThreshold: {
    global: {
        branches: 75,
        functions: 95,
        lines: 95,
        statements: 95,
    },
  },
  testMatch: [
    '<rootDir>/src/tests/**/*.js?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.husky/',
    '<rootDir>/.next/',
    '<rootDir>/coverage/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
    '<rootDir>/tutorials/',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
