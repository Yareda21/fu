"use client";

import { useRouter } from "next/navigation";
import { exercises } from "@/assets/exercise";
import { ArrowRight } from "lucide-react";

export default function Home() {
    const router = useRouter();

    const handleCardClick = (exercise) => {
        router.push(`/dm/${exercise.id}`);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Digital Marketing AI Exercises
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Learn how to leverage AI tools to create engaging videos for
                    social media marketing
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exercises.map((exercise) => (
                    <div
                        key={exercise.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col cursor-pointer transition-all duration-300 h-full"
                        onClick={() => handleCardClick(exercise)}
                    >
                        <div
                            className={`p-4 ${exercise.bgColor} flex items-center justify-center h-48`}
                        >
                            {exercise.icon}
                        </div>
                        <div className="p-6 flex-grow">
                            <h2 className="text-xl font-bold mb-2 text-pink-800 hover:text-pink-600 transition-colors">
                                {exercise.title}
                            </h2>
                            <p className="text-gray-600 mb-4">
                                {exercise.description}
                            </p>
                            <div className="flex items-center text-pink-600 font-medium">
                                View Exercise{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </div>
                        </div>
                        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs font-medium">
                                    {exercise.difficulty}
                                </span>
                                <span className="ml-auto">
                                    {exercise.duration}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
