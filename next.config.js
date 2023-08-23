const isDevelopment = process.env.NODE_ENV == "development";
const isProduction = process.env.NODE_ENV == "production";
const isStatic = process.env.IS_STATIC == 1;

/** @type {import('next').NextConfig} */
const devConfig = {
  reactStrictMode: true,
  rewrites: () => [{ source: "/:any*", destination: "/" }],
};

/** @type {import('next').NextConfig} */
const staticConfig = {
  reactStrictMode: true,
  output: "export",
  exportPathMap: () => ({
    "/": { page: "/" },
  }),
};

/** @type {import('next').NextConfig} */
const ssrConfig = {
  reactStrictMode: true,
  output: "standalone",
  rewrites: () => [{ source: "/:any*", destination: "/" }],
  assetPrefix: isProduction
    ? "https://next-server-qobqk4st4a-an.a.run.app"
    : undefined,
};

let nextConfig;

if (isDevelopment) nextConfig = devConfig;
else if (isStatic) nextConfig = staticConfig;
else if (isProduction) nextConfig = ssrConfig;
else {
  throw new Error("nextConfig is undefined.");
}

module.exports = nextConfig;
