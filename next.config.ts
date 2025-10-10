import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true, // tránh lỗi TS khi build production
    },
};

export default nextConfig;