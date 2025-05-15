const { withContentlayer } = require('next-contentlayer');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
    domains: ['images.unsplash.com'],
  },
}

module.exports = withPWA(withContentlayer(nextConfig)) 