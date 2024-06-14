/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  swcMinify: true,
  images: {
    domains: ["placehold.co"],
  },
  reactStrictMode: true,
};

export default nextConfig;
