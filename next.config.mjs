/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Disable static optimization for client components
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
