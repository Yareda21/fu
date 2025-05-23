"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="flex flex-col py-12 lg:flex-row gap-8">
            <section className="flex flex-col mb-6 w-full lg:w-3/5">
                <header className="my-6 text-center">
                    <p className="font-medium my-2 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">
                        Hello,
                    </p>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        I'm Yared Kebede.
                    </h2>
                </header>
                <div className="flex flex-col items-center">
                    <p className="mb-6 text-center max-w-[45ch] text-base lg:text-lg leading-relaxed">
                        Are you feeling stuck or overwhelmed in your coding
                        journey? Don't worry, I've got your back! Together,
                        we'll work to level up your skills, increase your
                        earning potential, and build a brighter future.
                    </p>
                    <div className="w-[85%] h-[375px] mb-4 mx-auto rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/VoRz7xfF9m0"
                            title="Final Intro"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col items-center my-6 p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-xl w-full lg:w-2/5"
            >
                <header className="mb-2 text-center">
                    <h2 className="text-2xl font-bold">New and Hot</h2>
                </header>

                <div className="flex flex-col items-center">
                    <p className="mb-2 text-center max-w-[40ch] text-base lg:text-lg leading-relaxed">
                        Check out the top 3 trending subjects that are making
                        waves right now!
                    </p>
                    <ul className="space-y-4 w-full">
                        {[
                            {
                                title: "Digital Marketing",
                                description:
                                    "Learn how to create impactful marketing strategies using digital tools",
                                videoUrl: "https://youtu.be/FeOMRdmcVXc",
                                courseTitle: "Digital Marketing",
                            },
                            {
                                title: "Web Development",
                                description:
                                    "Web development is the process of creating websites and web applications.",
                                videoUrl: "https://youtu.be/FeOMRdmcVXc",
                                courseTitle: "Web development using AI",
                            },
                            {
                                title: "Data Analysis",
                                description:
                                    "Master data analysis using Python, MySQL, and Microsoft Power BI",
                                videoUrl: "https://youtu.be/FeOMRdmcVXc",
                                courseTitle: "Data Analysis",
                            },
                        ].map((course, index) => (
                            <li
                                key={index}
                                className="bg-white/10 rounded-lg p-4 backdrop-blur-sm"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {course.title}
                                </h3>
                                <p className="text-sm mb-3">
                                    {course.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <a
                                        className="flex-1 text-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition duration-300 ease-in-out"
                                        href={course.videoUrl}
                                        target="_blank"
                                    >
                                        Watch Preview
                                    </a>
                                    <Link
                                        href={{
                                            pathname: "/register",
                                            query: {
                                                title: course.courseTitle,
                                            },
                                        }}
                                        className="flex-1 text-center px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-lg transition duration-300 ease-in-out"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.section>
        </div>
    );
};

export default Intro;
