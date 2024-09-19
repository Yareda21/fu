/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["undici", "@firebase/auth", "@firebase/storage"],
};

export default nextConfig;
