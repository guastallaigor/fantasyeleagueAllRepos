module.exports = {
  name: process.env.APP_NAME || 'Mock',
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  locale: process.env.APP_LOCALE || 'en-us',
}
