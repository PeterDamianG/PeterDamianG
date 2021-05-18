export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/.husky/',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  testMatch: [ "**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ]
};
