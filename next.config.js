const withPreact = require("next-plugin-preact");

module.exports = withPreact({
  pageExtensions: ["page.jsx", "api.ts"],
});
