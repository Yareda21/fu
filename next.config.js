/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com", "cdn.example.com"],
    },
};

module.exports = nextConfig;
