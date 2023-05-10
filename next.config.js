/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/',
  env: {
    BASE_URL: process.env.BASE_URL || 'localhost:4000',
    BLOGS_URL: process.env.BLOGS_URL || '/blogs',
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
};

module.exports = nextConfig;
