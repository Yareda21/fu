import { Outfit } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ReactQueryProvider } from "./ReactQueryProvider";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Coding Bootcamp - Learn to Code with Ease",
    description:
        "Join our coding bootcamp and gain the skills you need to excel in software development. Learn HTML, CSS, JavaScript, React, and more with hands-on projects and expert mentorship.",
    keywords:
        "coding bootcamp, Ethiopia, Digital Marketing, Data Analysis and Analytics, learn to code, web development, JavaScript, React, HTML, CSS, software development",
    url: "https://infinity-codecamp.vercel.app/", // Add your website's URL
    image: "/logo.png", // Open Graph image for better social media previews
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                {/* Favicon */}
                <link rel="icon" type="image/png" href="/logo.png" />

                {/* Basic SEO Meta Tags */}
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Open Graph (OG) Meta Tags for Social Sharing */}
                <meta property="og:title" content={metadata.title} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="og:url" content={metadata.url} />
                <meta property="og:image" content={metadata.image} />
                <meta property="og:type" content="website" />

                {/* Twitter Card Meta Tags for Social Sharing */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta
                    name="twitter:description"
                    content={metadata.description}
                />
                <meta name="twitter:image" content={metadata.image} />
            </Head>
            <body className={inter.className}>
                <ReactQueryProvider>
                    <Nav />
                    {children}
                    <Footer />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
