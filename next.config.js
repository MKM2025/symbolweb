/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 