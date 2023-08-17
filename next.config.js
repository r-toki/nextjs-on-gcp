/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => [{ source: "/:any*", destination: "/" }],
  output: "standalone",
};

module.exports = nextConfig;
