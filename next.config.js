const CircularDependencyPlugin = require('circular-dependency-plugin');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
});
const runtimeCaching = require('next-pwa/cache');

const plugins = [];
// Content Security Policy
const ContentSecurityPolicy = `
   default-src 'self';
   script-src 'self';
   connect-src 'self' vitals.vercel-insights.com;
   style-src 'self';
   font-src 'self';  
 `;

/**
 * Security:
 *  X Content Type Options
 *  X Frame Options
 *  X XSS Protection
 *  Security Policy
 */
const securityHeaders = () => [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
];

plugins.push(withPWA);

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  /*
    Problem with 12.3.1 false error for property see more https://github.com/vercel/next.js/issues/39161
  */
  pwa: {
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest.json$/],
  },
  // Security Headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders(),
      },
    ];
  },
  // Webpack
  webpack: (config) => {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        include: /src/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      })
    );
    return config;
  },
};

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig);
