// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
    // Your existing Next.js configurations...
  
    // Add this configuration for serving static files from the public directory
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/:path*',
        },
      ];
    },
  };
  
