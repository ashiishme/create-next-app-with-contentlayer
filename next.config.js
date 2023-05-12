/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

// wrap the nextConfig using withContentlayer

const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer(nextConfig);
