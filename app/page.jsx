import RoadMap from "./components/RoadMap";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Head from "next/head";

export default function Home() {
    const title = "Home | Ethio Infinity Coding School";
    const description =
        "Welcome to Ethio Infinity Coding School. Learn coding with our easy-to-follow courses.";
    const image = "/logo.png";
    const url = "https://ethioinfinity.vercel.app/";
    const youtubeChannel = "https://www.youtube.com/@infinityCode-21";
    const linkedinProfile = "https://www.linkedin.com/in/yared-kebede/";
    const tiktokProfile = "https://www.tiktok.com/@yared.kebede";

    return (
        <>
            <Head>
                {/* Favicon */}
                <link rel="icon" type="image/png" href="/logo.png" />

                {/* Basic SEO Meta Tags */}
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="infinity, coding school, learn to code, web development"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Open Graph (OG) Meta Tags for Social Sharing */}
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={url} />
                <meta property="og:image" content={image} />
                <meta property="og:type" content="website" />

                {/* Additional Meta Tags for Social Media */}
                <meta
                    property="og:site_name"
                    content="Infinity Coding School"
                />
                <meta property="og:video" content={youtubeChannel} />
                <meta property="og:locale" content="en_US" />

                {/* Links to Social Media Profiles */}
                <link rel="canonical" href={url} />
                <link
                    rel="alternate"
                    type="text/html"
                    href={youtubeChannel}
                    title="Visit our YouTube Channel"
                />
                <link
                    rel="alternate"
                    type="text/html"
                    href={linkedinProfile}
                    title="Visit our LinkedIn Profile"
                />
                <link
                    rel="alternate"
                    type="text/html"
                    href={tiktokProfile}
                    title="Visit our TikTok Profile"
                />
            </Head>
            <Hero />
            <Intro />
            <RoadMap />
        </>
    );
}
