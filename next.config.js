/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    emotion: true,
  },
  images: {
    domains: ['picsum.photos', 'ssl.pstatic.net', 'localhost'],
  },
};

module.exports = nextConfig;
