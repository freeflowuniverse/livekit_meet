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
      // Set custom filename and chunkFilename for client-side bundles
      if (!isServer) {
        config.output.filename = 'static/js/[name].js';
        config.output.chunkFilename = 'static/js/[name].chunk.js';
      }

    return config;
    },
  };
  
  module.exports = nextConfig;