import nextJest from 'next/jest';
import '@testing-library/jest-dom/extend-expect';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  testMatch: ['<rootDir>/tests/**/*.js?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^@/public/(.*)$': '<rootDir>/public/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/icons/(.*)$': '<rootDir>/components/icons/$1',
    '^@/layout/(.*)$': '<rootDir>/components/layout/$1',
    '^@/sections/(.*)$': '<rootDir>/components/main/sections/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/data/(.*)$': '<rootDir>/data/$1',
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
