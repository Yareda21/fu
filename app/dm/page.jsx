"use client";

import { useRouter } from "next/navigation";
import { exercises } from "@/assets/exercise";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCardClick = (exercise) => {
        router.push(`/dm/${exercise.id}`);
    };

    const categories = ["All", "Beginner", "Intermediate", "Advanced"];

    const filteredExercises =
        selectedCategory === "All"
            ? exercises
            : exercises.filter(
                  (exercise) => exercise.difficulty === selectedCategory
              );

    return (
        <div className="flex min-h-screen">
            {/* Side Navigation */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">
                    Categories
                </h2>
                <nav className="space-y-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                                selectedCategory === category
                                    ? "bg-blue-100 text-blue-700"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold mb-3">
                        Digital Marketing AI Exercises
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Learn how to leverage AI tools to create engaging videos
                        for social media marketing
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredExercises.map((exercise) => (
                        <div
                            key={exercise.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl flex flex-col cursor-pointer transition-all duration-300"
                            onClick={() => handleCardClick(exercise)}
                        >
                            <div
                                className={`p-3 ${exercise.bgColor} flex items-center justify-center h-32`}
                            >
                                {exercise.icon}
                            </div>
                            <div className="p-4 flex-grow">
                                <h2 className="text-lg font-bold mb-2 text-pink-800 hover:text-pink-600 transition-colors">
                                    {exercise.title}
                                </h2>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                    {exercise.description}
                                </p>
                                <div className="flex items-center text-sm text-pink-600 font-medium">
                                    View Exercise{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </div>
                            </div>
                            <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
                                <div className="flex items-center text-xs text-gray-500">
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
        </div>
    );
}
