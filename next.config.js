/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4080',
        pathname: '/uploads/**',
      },
      {
        protocol: 'http',
        hostname: '192.168.1.64',
        port: '4080',
        pathname: '/uploads/**',
      },
    ],
  }
}

module.exports = nextConfig
