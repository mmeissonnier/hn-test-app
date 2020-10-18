module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  coverageReporters: ['json', 'text', 'text-summary'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@types$': '<rootDir>/src/types',
    '^@hooks$': '<rootDir>/src/hooks',
    '^@store$': '<rootDir>/src/store',
    '^@components$': '<rootDir>/src/components',
    '^@containers$': '<rootDir>/src/containers',
    '^@utils$': '<rootDir>/src/utils',
  },
};
