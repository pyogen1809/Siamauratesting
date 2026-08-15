import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ['nasty-months-wait.loca.lt', '*.loca.lt'],
};

export default nextConfig;
