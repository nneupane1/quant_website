/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.externals.push({
      'node:fs': 'commonjs node:fs',
      'node:path': 'commonjs node:path',
    });
    return config;
  },
};

module.exports = nextConfig;
