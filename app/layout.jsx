import { Outfit } from "next/font/google";

import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ReactQueryProvider } from "./ReactQueryProvider";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
    keywords:
        "Amharic, yared kebede,Yared coding school, Ethiopia, Digital Marketing, Data Analysis and Analytics, learn to code, web development, JavaScript, React, HTML, CSS, software development",

    image: "/logo.png",
    url: "https://yared-coding.vercel.app/",
    youtubeChannel: "https://www.youtube.com/@infinityCode-21",
    linkedinProfile: "https://www.linkedin.com/in/yared-kebede/",
    tiktokProfile: "https://www.tiktok.com/@yared.kebede",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                {/* Favicon */}
                <link rel="icon" type="image/png" href="/logo.png" />

                {/* Basic SEO Meta Tags */}
                <meta name="keywords" content={metadata.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Open Graph (OG) Meta Tags for Social Sharing */}
                <meta property="og:url" content={metadata.url} />
                <meta property="og:image" content={metadata.image} />
                <meta property="og:type" content="website" />

                {/* Additional Meta Tags for Social Media */}
                <meta
                    property="og:site_name"
                    content="Infinity Coding School"
                />
                <meta property="og:locale" content="en_US" />

                {/* Links to Social Media Profiles */}
                <link rel="canonical" href={metadata.url} />
                <link
                    rel="alternate"
                    type="text/html"
                    href={metadata.youtubeChannel}
                    title="Visit our YouTube Channel"
                />
                <link
                    rel="alternate"
                    type="text/html"
                    href={metadata.linkedinProfile}
                    title="Visit our LinkedIn Profile"
                />
                <link
                    rel="alternate"
                    type="text/html"
                    href={metadata.tiktokProfile}
                    title="Visit our TikTok Profile"
                />

                <meta charSet="utf-8" />
                <script
                    async
                    defer
                    crossOrigin="anonymous"
                    src="https://connect.facebook.net/en_US/sdk.js"
                ></script>
                <script
                    async
                    defer
                    src="https://accounts.google.com/gsi/client"
                ></script>
            </Head>
            <body className={inter.className}>
                <ReactQueryProvider>
                    <Nav />
                    {children}
                    <Analytics />
                    <Footer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
