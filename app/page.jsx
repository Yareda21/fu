import Courses from "./components/Courses";
import RoadMap from "./components/RoadMap";
import Hero from "./components/Hero";
import Intro from "./components/Intro";

export default function Home() {
    return (
        <>
            <Hero />
            <Intro />
            {/* <Courses /> */}
            <RoadMap />
        </>
    );
}
