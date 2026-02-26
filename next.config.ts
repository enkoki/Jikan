import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn.myanimelist.net'], // whitelist MyAnimeList CDN
    },
};

export default nextConfig;
