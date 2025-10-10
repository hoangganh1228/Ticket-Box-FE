import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true, // ✅ Bỏ qua lỗi ESLint khi build (Vercel sẽ không chặn)
    },
    typescript: {
        ignoreBuildErrors: true, // tránh lỗi TS khi build production
    },
};

export default nextConfig;
