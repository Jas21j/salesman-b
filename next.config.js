/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // All images served from /public — no remote patterns needed
    unoptimized: false,
  },
}

module.exports = nextConfig
