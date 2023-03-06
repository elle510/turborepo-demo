const withTwin = require('./withTwin');

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true,
  transpilePackages: ['ui'],
});
