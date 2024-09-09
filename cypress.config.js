const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
  },
});

module.exports = {
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
};
