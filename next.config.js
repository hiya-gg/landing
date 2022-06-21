// noinspection JSLastCommaInObjectLiteral

/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { dimensions: false },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
