import Courses from "./components/Courses";
import Firestore from "./components/Firestore";
import Hero from "./components/Hero";
import Intro from "./components/Intro";


export default function Home() {

  return (
    <>
      <Hero />
      <Intro />
      <Courses />
      <Firestore />
    </>
  );
}
