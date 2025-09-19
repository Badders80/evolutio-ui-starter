/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {}, // keep empty for stability
  reactStrictMode: true,
  webpack(config) {
    // Exclude SVGs from Next's default asset handling
    const assetRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));
    if (assetRule) assetRule.exclude = /\.svg$/i;

    // Route SVG imports from TS/JS through SVGR -> React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { icon: false, svgo: true, titleProp: true, ref: true }
        }
      ]
    });
    return config;
  }
};
export default nextConfig;