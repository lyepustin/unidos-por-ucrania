const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n: {
    locales: ["en", "es", "ru", "ua"],
    defaultLocale: "es",
    localeDetection: false
  }
  // trailingSlash: true
};
