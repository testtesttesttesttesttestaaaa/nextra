/** @type {import('next').NextConfig} */
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/nextra" : "";
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "export",
  assetPrefix,
  basePath: assetPrefix,
};

module.exports = {
  ...withNextra(),
  ...nextConfig,
};
