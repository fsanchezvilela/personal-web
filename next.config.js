/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  pwa: {
    disable: process.env.NODE_ENV !== 'production',
    dest: 'public',
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
};

module.exports = nextConfig;
