module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '~/themes/(.*)': '<rootDir>/themes/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
