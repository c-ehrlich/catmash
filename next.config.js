/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.thecatapi.com/**',
        },
        {
          protocol: 'https',
          hostname: '*.media.tumblr.com/**',
        },
        {
          protocol: 'https',
          hostname: '*.theimageapi.com/**',
        },
        {
          protocol: 'https',
          hostname: '**.*.*/**',
        },
      ],
    },
  },
};

module.exports = nextConfig;
