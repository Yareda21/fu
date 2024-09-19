"use client";
import React, { useEffect, useState } from "react";
import { programmingCourses } from "@/assets/newCourses";
import Link from "next/link";

const CourseDetailsPage = ({ params }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const decodedId = decodeURIComponent(params.courseid);
    console.log(decodedId);
    useEffect(() => {
        const findCourse = async () => {
            const data = programmingCourses.find(
                (course) => course.title === decodedId
            );

            setSelectedCourse(data);
        };

        findCourse();
        window.scrollTo(0, 0);
    }, [params.courseid]);

    if (!selectedCourse) {
        return <div>Loading course...</div>;
    }

    return (
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        {selectedCourse.title}
                    </h2>

                    <p className="mt-4  text-gray-300">
                        {selectedCourse.description}
                    </p>
                </div>

                {/* Course details */}
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Core Skills Covered:
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex ut quo possimus adipisci distinctio alias
                            voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Practical Applications:
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex ut quo possimus adipisci distinctio alias
                            voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Popular Tools & Technologies:
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex ut quo possimus adipisci distinctio alias
                            voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Career Opportunities:
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex ut quo possimus adipisci distinctio alias
                            voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            Notable Projects:
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex ut quo possimus adipisci distinctio alias
                            voluptatum blanditiis laudantium.
                        </p>
                    </div>

                    <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-10 text-pink-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>

                        <h2 className="mt-4 text-xl font-bold text-white">
                            AI & Future Trends:
                        </h2>

                        <p className="mt-1 text-sm text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ex ut quo possimus adipisci distinctio alias
                            voluptatum blanditiis laudantium.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href={{
                            pathname: "/register",
                            query: {
                                title: selectedCourse.title,
                            },
                        }}
                        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                        Get Started Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CourseDetailsPage;
