"use client";
import React, { useEffect, useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { jobSources } from "@/assets/jobResource";

export default function JobResourcePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const title = "Online Jobs - Opportunities for Developers and Students";
    const description =
        "Explore job opportunities at Yared Coding School! We connect developers and students with top companies looking for talent in programming, software development, and more.";
    const url = "https://www.yared-coding.vercel.app/jobs";

    useEffect(() => {
        // Updating document head elements
        document.title = title;

        const metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const newMetaDescription = document.createElement("meta");
            newMetaDescription.name = "description";
            newMetaDescription.content = description;
            document.head.appendChild(newMetaDescription);
        }

        const canonicalLink = document.querySelector('link[rel="canonical"]');
        if (canonicalLink) {
            canonicalLink.setAttribute("href", url);
        } else {
            const newCanonicalLink = document.createElement("link");
            newCanonicalLink.rel = "canonical";
            newCanonicalLink.href = url;
            document.head.appendChild(newCanonicalLink);
        }
    }, [title, description, url]);

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
                <div className="aspect-w-16 aspect-h-6 mb-6">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/VoRz7xfF9m0"
                        title="Introduction to Online Jobs by Ethio Infinity"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <section className="mb-12">
                <div className="flex items-center mb-6">
                    <Search className="mr-2 h-4 w-4 text-black" />
                    <input
                        type="text"
                        placeholder="Search for jobs, skills, or platforms..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-sm border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                    <h3 className="text-xl text-black font-semibold">
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
                                        <div className="absolute inset-0 h-[70%] bg-black bg-opacity-75 text-white p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                                    src="https://www.youtube.com/embed/VoRz7xfF9m0"
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
                                    src="https://www.youtube.com/embed/VoRz7xfF9m0"
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
