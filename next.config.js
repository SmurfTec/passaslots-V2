/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/',
  env: {
    BASE_URL: process.env.BASE_URL || 'localhost:4000',
    BLOGS_URL: process.env.BLOGS_URL || '/blogs',
  },
};

module.exports = nextConfig;
