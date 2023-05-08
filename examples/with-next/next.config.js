/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    domains: [
      "images.ctfassets.net",
    ],
  },
  css: {
    optimize: true,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
          },
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
    });

    return config;
  },
};

module.exports = nextConfig;