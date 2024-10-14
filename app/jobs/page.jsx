"use client";
import React, { useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { jobSources } from "@/assets/jobResource";

export default function JobResourcePage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredJobSources = jobSources
        .map((category) => ({
            ...category,
            platforms: category.platforms.filter(
                (platform) =>
                    platform.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    platform.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    category.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
            ),
        }))
        .filter((category) => category.platforms.length > 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    Find Your Perfect Online Job
                </h1>
                <div className="aspect-video mb-6">
                    <iframe
                        className="w-full h-[400px] rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Introduction to Online Jobs for Students"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center mb-6">
                    <Search className="mr-2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search for jobs, skills, or platforms..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {filteredJobSources.map((category, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            {category.category}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.platforms.map(
                                (platform, platformIndex) => (
                                    <div
                                        key={platformIndex}
                                        className="relative group"
                                    >
                                        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                                            <div className="p-4">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-xl font-semibold">
                                                        {platform.name}
                                                    </h3>
                                                    <img
                                                        src={platform.image}
                                                        alt={platform.name}
                                                        className="w-12 h-12 object-contain"
                                                    />
                                                </div>
                                                <p className="text-gray-600 mb-4">
                                                    {platform.description}
                                                </p>
                                                <a
                                                    href={platform.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block w-full bg-blue-500 text-white text-center py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
                                                >
                                                    Visit Site{" "}
                                                    <ExternalLink className="inline-block ml-2 h-4 w-4" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p>
                                                Great for students interested in{" "}
                                                {category.category.toLowerCase()}{" "}
                                                opportunities!
                                            </p>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ))}
            </section>

            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Video Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                Creating a Strong Profile
                            </h3>
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="How to Create a Strong Online Profile"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                Applying for Jobs Successfully
                            </h3>
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Tips for Successful Job Applications"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
