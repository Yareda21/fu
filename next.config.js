/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.yared-coding.vercel.app" }],
                destination: "https://yared-coding.vercel.app/:path*",
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
