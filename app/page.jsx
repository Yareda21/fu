import RoadMap from "./components/RoadMap";
import Hero from "./components/Hero";
import Intro from "./components/Intro";


export const metadata = {
    title: "Home | Yared Coding School",
    description:
        "Welcome to Yared Coding School. Learn coding with our easy-to-follow courses.",
    openGraph: {
        title: "Home | Yared Coding School",
        description:
            "Welcome to Yared Coding School. Learn coding with our easy-to-follow courses.",
        url: "https://yared-coding.vercel.app/",
        images: [
            {
                url: "/logo.png",
                width: 800,
                height: 600,
                alt: "Yared Coding School Logo",
            },
        ],
    },
};
export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            <RoadMap />
        </>
    );
}
