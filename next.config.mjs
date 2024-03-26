/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/2024',
  distDir: 'out/2024',
  cleanDistDir: true
};

export default nextConfig;
