/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.STATIC_URL || '@{app.static_url}',
  output: 'export',
  swcMinify: false,
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  plugins: {
    cssnano: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.mjs$/,
      enforce: 'pre',
      use: ['source-map-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;