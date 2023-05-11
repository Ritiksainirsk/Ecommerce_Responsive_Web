/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslink: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
