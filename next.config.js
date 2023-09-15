const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

// Define the Next.js configuration
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  webpack: (config, { dev }) => {
    // Custom webpack configuration...

    // Important: return the modified config
    return config;
  },
  env: {
    // Custom environment variables...
  },
};

module.exports = withNextra(nextConfig);
