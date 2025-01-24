import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false; // Disable caching temporarily to avoid caching issues
    return config;
  },
};

export default withNextIntl(nextConfig);
