/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverActions: true,
    },
    images: {
        domains: ['res.cloudinary.com', 'cdn.discordapp.com', 'i.imgur.com'],
    },
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    compiler: {
        styledComponents: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
