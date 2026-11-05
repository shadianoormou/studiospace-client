import type { NextConfig } from 'next';
const api = (process.env.API_URL || 'http://127.0.0.1:4000').replace(/\/$/, '');
const nextConfig: NextConfig = {
  async rewrites() { return [{ source: '/api/:path*', destination: `${api}/api/:path*` }]; },
};
export default nextConfig;
