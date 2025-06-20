const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demowebshop.tricentis.com/',
    setupNodeEvents(on, config) {},
  },
});

// export default defineConfig({
//   defaultCommandTimeout: 10000,
//   pageLoadTimeout: 60000,
//   responseTimeout: 30000,
// });