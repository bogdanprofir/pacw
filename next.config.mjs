/** @type {import('next').NextConfig} */
const nextConfig = {

   output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vta.cc",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
};

export default nextConfig;
