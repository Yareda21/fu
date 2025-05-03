import { notFound } from "next/navigation";
import { exercises } from "@/assets/exercise";

// import all your exercise UIs
import DmCoursePage from "@/app/components/dm_exercises/DmCoursePage";
import AIVideoCreationPage from "@/app/components/dm_exercises/AIVideoCreationPage";
import AIVideo from "@/app/components/dm_exercises/DmAIpage";
import DMsocail from "@/app/components/dm_exercises/DMsocial";

const componentMap = {
    1: DmCoursePage,
    2: AIVideoCreationPage,
    3: AIVideo,
    4: DMsocail,
};

export default function ExercisePage({ params }) {
    const { id } = params;
    const meta = exercises.find((ex) => ex.id === Number(id));
    if (!meta) return notFound();

    const SpecificExercise = componentMap[Number(id)];
    if (!SpecificExercise) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">{meta.title}</h1>
                <p>
                    Exercise component not found. Please check the
                    implementation.
                </p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">{meta.title}</h1>
            <SpecificExercise />
        </div>
    );
}
