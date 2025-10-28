/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['cdn.sanity.io'],
    unoptimized: true
  },
};

export default nextConfig;
