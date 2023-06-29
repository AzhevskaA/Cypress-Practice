const { defineConfig } = require('cypress')

module.exports = defineConfig({
viewportHeight: 1000,
viewportWidth: 1920,	  
e2e: {
    baseUrl: 'https://autoqa.tests.workiz.com',
specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
excludeSpecPattern: ['**/1-getting-started/*','**/2-advanced-examples/*'],
chromeWebSecurity: false,
userAgent: "workiz-automation-user-agent",
"numTestsKeptInMemory": 0,
"videoUploadOnPasses": false,
  }
})