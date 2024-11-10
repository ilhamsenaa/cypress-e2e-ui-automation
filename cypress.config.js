const { defineConfig } = require('cypress');
const { allureCypress } = require ('allure-cypress/reporter');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 20000,
  requestTimeout: 10000,
  e2e: {
    specPattern: 'e2e/tests/**/*.{js,jsx,ts,tsx}',
    supportFile: 'support/index.js',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    }
  }
});