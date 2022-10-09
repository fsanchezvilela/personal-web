/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

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
const nextConfig = withPWA({
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
  // Security Layer
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders(),
      },
    ];
  },
});

module.exports = nextConfig;
