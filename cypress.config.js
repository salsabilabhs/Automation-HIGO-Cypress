const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://higo.id/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
