"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Intro = () => {
    return (
        <div className="flex flex-col py-[100px] lg:flex-row">
            <section className="flex flex-col mb-10 my-5 w-full lg:w-3/4">
                <header className="my-12 mb-6 text-center">
                    <p className="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">
                        Hello,
                    </p>
                    <h2 className="text-3xl">I'm Yared Kebede.</h2>
                </header>
                <div className="flex flex-col items-center">
                    <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
                        Are you feeling stuck or overwhelmed in your coding
                        journey? Don't worry, I've got your back! Together,
                        we'll work to level up your skills, increase your
                        earning potential, and build a brighter future.
                    </p>
                    <div className="w-[90%] mb-6 mx-6 aspect-w-16 aspect-h-9">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/VoRz7xfF9m0"
                            title="Final Intro"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </section>
            <motion.section
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
                className="flex flex-col items-center my-10 p-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg w-full lg:w-1/4"
            >
                <header className="mb-6 text-center">
                    <h2 className="text-4xl font-bold">New and Hot</h2>
                </header>
                <div className="flex flex-col items-center">
                    <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
                        Check out the top 3 trending subjects that are making
                        waves right now!
                    </p>
                    <ul className="list-disc list-inside mb-6">
                        <li className="mb-4 text-2xl">Digital Marketing</li>
                        <div className="w-full mb-6">
                            {/* course description and link */}
                            <p>
                                Learn how to create impactful marketing
                                strategies using digital tools
                            </p>
                            <a
                                className="flex justify-center items-center px-4 py-2 mt-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 ease-in-out"
                                href="https://youtu.be/FeOMRdmcVXc"
                                target="_blank"
                            >
                                Watch the course
                            </a>
                            <Link
                                href={{
                                    pathname: "/register",
                                    query: {
                                        title: "Digital Marketing",
                                    },
                                }}
                                className="inline-block my-1 rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Register
                            </Link>
                        </div>
                        <li className="mb-4 text-2xl">Web Development</li>
                        <div className="w-full mb-6">
                            {/* course description and link */}
                            <p>
                                Web development is the process of creating
                                websites and web applications.
                            </p>
                            <a
                                className="flex justify-center items-center px-4 py-2 mt-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 ease-in-out"
                                href="https://youtu.be/FeOMRdmcVXc"
                                target="_blank"
                            >
                                Watch the course
                            </a>
                            <Link
                                href={{
                                    pathname: "/register",
                                    query: {
                                        title: "Web development using AI",
                                    },
                                }}
                                className="inline-block my-1 rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Register
                            </Link>
                        </div>
                        <li className="mb-4 text-2xl">Data Analysis</li>
                        <div className="w-full mb-6">
                            {/* course description and link */}
                            <p>
                                Master data analysis using Python, MySQL, and
                                Microsoft Power BI
                            </p>
                            <a
                                className="flex justify-center items-center px-4 py-2 mt-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300 ease-in-out"
                                href="https://youtu.be/FeOMRdmcVXc"
                                target="_blank"
                            >
                                Watch the course
                            </a>
                            <Link
                                href={{
                                    pathname: "/register",
                                    query: {
                                        title: "Data Analysis",
                                    },
                                }}
                                className="inline-block my-1 rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Register
                            </Link>
                        </div>
                    </ul>
                </div>
            </motion.section>
        </div>
    );
};

export default Intro;
