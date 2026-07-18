/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ribase.io",
  assetPrefix: "/ribase.io/",
  distDir: 'out', // Explicitly set the output directory
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig