const { withContentlayer } = require('next-contentlayer');

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

module.exports = withContentlayer(nextConfig) 