/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dummyjson.com", "cdn.dummyjson.com"],
    dangerouslyAllowSVG: true
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
