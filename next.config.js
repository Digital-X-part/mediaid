/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "w3.org",
      },
      {
        protocol: "https",
        hostname: "previews.123rf.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
    ],
  },
  // output: "export",
};

module.exports = nextConfig;
