module.exports = {
  preset:'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['<rootDir>/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  transform:{
    '^.+\\.tsx?$': 'ts-jest',
  },
};
