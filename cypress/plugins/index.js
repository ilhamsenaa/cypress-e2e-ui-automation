/* eslint-disable */

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const allure = require('@shelex/cypress-allure-plugin/writer');
module.exports = (on, config) => {
  allure(on, config); // Add this line
  return config;
};