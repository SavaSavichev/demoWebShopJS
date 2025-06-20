const { defineConfig } = require('cypress');

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  responseTimeout: 30000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',
    setupNodeEvents(on, config) {
    },
  },
});