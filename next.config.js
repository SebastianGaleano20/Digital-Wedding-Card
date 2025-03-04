/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    serverActions: true,
  },
    images: {
      domains: ['multer-upload-api.s3.us-east-2.amazonaws.com'],
    },
  }