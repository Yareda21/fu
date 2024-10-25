"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Download, User } from "lucide-react";
import { modules } from "@/assets/resources";

export default function Component() {
    const [openModule, setOpenModule] = useState(null);
    const [completedResources, setCompletedResources] = useState(new Set());
    const [user, setUser] = useState({});

    const handleModuleClick = (moduleName) => {
        setOpenModule(openModule === moduleName ? null : moduleName);
    };
    useEffect(() => {
        // Get the URL search params
        const searchParams = new URLSearchParams(window.location.search);
        const userParam = searchParams.get("user");

        if (userParam) {
            setUser(JSON.parse(userParam));
        }
    }, []);

    const handleResourceComplete = (resourceTitle) => {
        setCompletedResources((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(resourceTitle)) {
                newSet.delete(resourceTitle);
            } else {
                newSet.add(resourceTitle);
            }
            return newSet;
        });
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden mb-8">
                <div className="p-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        Coding Bootcamp Resources
                    </h1>
                    <div className="flex items-center">
                        <User className="mr-2" />
                        <span className="font-semibold">{user.name}</span>
                    </div>
                </div>
                <div className="bg-gray-700 flex justify-between items-center p-4">
                    <div>
                        <p className="text-gray-300">
                            Track: Full-Stack Development
                        </p>
                        <p className="text-gray-300">
                            Progress: {completedResources.size} /{" "}
                            {modules.reduce(
                                (acc, module) => acc + module.resources.length,
                                0
                            )}{" "}
                        </p>
                    </div>
                    <div>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded">
                            <a href="/feedback" target="_black">
                                Give Feedback
                            </a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {modules.map((module) => (
                    <div
                        key={module.name}
                        className="bg-gray-500 shadow-md rounded-lg overflow-hidden"
                    >
                        <button
                            className="w-full p-4 text-left font-semibold flex justify-between items-center focus:outline-none hover:bg-blue-700"
                            onClick={() => handleModuleClick(module.name)}
                        >
                            <div className="flex items-center">
                                {module.icon}
                                <span className="ml-2">{module.name}</span>
                            </div>
                            {openModule === module.name ? (
                                <ChevronUp />
                            ) : (
                                <ChevronDown />
                            )}
                        </button>
                        {openModule === module.name && (
                            <div className="p-4">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-800">
                                            <th className="text-left p-2">
                                                Title
                                            </th>
                                            <th className="text-left p-2 hidden md:table-cell">
                                                Type
                                            </th>
                                            <th className="text-left p-2 hidden md:table-cell">
                                                Description
                                            </th>
                                            <th className="p-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {module.resources.map(
                                            (resource, index) => (
                                                <tr
                                                    key={index}
                                                    className="border-t"
                                                >
                                                    <td className="p-2 ">
                                                        {resource.title}
                                                    </td>
                                                    <td className="p-2 hidden md:table-cell">
                                                        {resource.type}
                                                    </td>
                                                    <td className="p-2 hidden md:table-cell">
                                                        {resource.description}
                                                    </td>
                                                    <td className="p-2">
                                                        <a
                                                            href={resource.url}
                                                            target="_blank"
                                                            download={
                                                                resource.title
                                                            }
                                                        >
                                                            <button
                                                                className={`py-1 px-2 rounded flex items-center justify-center w-full ${
                                                                    completedResources.has(
                                                                        resource.title
                                                                    )
                                                                        ? "bg-green-500 hover:bg-green-600 text-black"
                                                                        : "bg-blue-500 hover:bg-blue-600 text-black"
                                                                }`}
                                                                onClick={() =>
                                                                    handleResourceComplete(
                                                                        resource.title
                                                                    )
                                                                }
                                                            >
                                                                <Download className="w-4 h-4 mr-1" />
                                                                {completedResources.has(
                                                                    resource.title
                                                                )
                                                                    ? "Completed"
                                                                    : "Start"}
                                                            </button>
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    Learning Insight
                </h2>
                <p className="text-gray-700">
                    You've completed {completedResources.size} out of{" "}
                    {modules.reduce(
                        (acc, module) => acc + module.resources.length,
                        0
                    )}{" "}
                    resources. Remember, consistent practice and application of
                    these concepts in real-world projects will solidify your
                    skills. Keep pushing yourself and don't hesitate to
                    collaborate with your peers for a richer learning
                    experience.
                </p>
            </div>
        </div>
    );
}
