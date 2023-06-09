/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/',
  env: {
    BASE_URL: process.env.BASE_URL || 'localhost:4000',
    BLOGS_URL: process.env.BLOGS_URL || '/blogs',
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    GOOGLE_CAPTCHA_CLIENT_KEY: process.env.GOOGLE_CAPTCHA_CLIENT_KEY,
    JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    RETRY_ATTEMPTS: process.env.RETRY_ATTEMPTS,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
