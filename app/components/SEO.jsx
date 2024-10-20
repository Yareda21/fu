import Head from "next/head";

export default function SEO({ title, description, url }) {
    return (
        <Head>
            {/* Favicon */}
            <link rel="icon" type="image/png" href="/logo.png" />
            {console.log(title)}
            {/* Basic SEO Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />

            {/* Open Graph (OG) Meta Tags for Social Sharing */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Yared Coding School" />
            <meta property="og:locale" content="en_US" />

            {/* Links to Social Media Profiles */}
            <link rel="canonical" href={url} />
        </Head>
    );
}
