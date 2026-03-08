import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents browsers from guessing MIME types (reduces XSS risk)
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Prevents clickjacking by allowing framing only from same origin
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  // Forces HTTPS for 2 years, including subdomains, eligible for preload list
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  // Prevents the site from opening cross-origin popups with retained access (mitigates XSS, Spectre)
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
  // Controls which cross-origin resources can be embedded
  { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
  // Sends full URL as referrer only for same-origin; only origin for cross-origin
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Restricts access to sensitive browser features
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = {
  images: {
    // Prefer AVIF (smaller than WebP), fall back to WebP
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
