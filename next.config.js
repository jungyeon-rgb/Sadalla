/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['ssl.pstatic.net', 'localhost', 'http', '34.64.140.26'],
  },
};

module.exports = nextConfig;
