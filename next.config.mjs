/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Apply these headers to all routes
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://assets.calendly.com;
              style-src 'self' 'unsafe-inline' https://assets.calendly.com;
              frame-src https://calendly.com;
              img-src 'self' data:;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
