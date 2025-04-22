/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    remotePatterns: [],
    domains: [], // Add any external image domains if needed
  },
}

module.exports = nextConfig 