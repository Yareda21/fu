import Image from "next/image";
import Link from "next/link";
import React from "react";
import { programmingCourses } from "@/assets/newCourses";

const page = () => {
    return (
        <main className="flex items-center justify-center py-4 px-12">
            <div className="container">
                <div className="relative">
                    <Image
                        alt="background"
                        fetchPriority="high"
                        width="1572"
                        height="795"
                        decoding="async"
                        className="absolute -top-32 -z-10"
                        style={{ color: "transparent" }}
                        src="/_next/static/media/bg-grid.8abf9bc6.svg"
                    />
                    <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
                        <h1 className="lg:text-5xl mb-8">Learning Paths</h1>
                        <p className="text-lg lg:text-2xl max-w-prose">
                            Discover your optimal learning path to reach your
                            full potential.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 undefined">
                    {programmingCourses.map((subject) => {
                        return (
                            <div
                                key={subject.title}
                                className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative "
                            >
                                <div className="h-[196px] relative">
                                    <Link
                                        className="relative w-full h-full inline-block"
                                        href={""}
                                    >
                                        <Image
                                            alt={subject.title}
                                            layout="fill"
                                            fetchPriority="high"
                                            decoding="async"
                                            className="object-cover absolute inset-0 h-full w-full bg-transparent text-transparent"
                                            src={subject.image}
                                        />
                                    </Link>
                                </div>
                                <div className="p-6">
                                    <Link
                                        className="font-semibold no-underline hover:underline"
                                        href={"subject.link"}
                                    >
                                        <h2 className="text-xl mb-0">
                                            {subject.title}
                                        </h2>
                                    </Link>
                                    <p>{subject.short}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default page;
