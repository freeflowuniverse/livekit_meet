/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: 'https://freeflowuniverse.github.io/livekit_meet',
    output: 'export',
    swcMinify: false,
    reactStrictMode: false,
    productionBrowserSourceMaps: true,
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
