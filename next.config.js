/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/(.*)",
                has: [{ type: "host", value: "www.yared-coding.vercel.app" }],
                destination: "https://yared-coding.vercel.app/:1",
                permanent: true,
            },
        ];
    },
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com", "cdn.example.com"],
    },
};

module.exports = nextConfig;
