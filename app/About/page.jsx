"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import { certificateImages } from "@/assets/testimonyResource";

export default function About() {
    const title = "About Me | Yared Coding School";
    const description =
        "Learn about Yared Coding School, our mission, vision, and the team behind our courses.";
    const url = "https://yaredcoding.vercel.app/about";

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

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

    return (
        <>
            <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
                <motion.div
                    className="space-y-16"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Intro and image */}
                    <motion.div
                        className="flex flex-col lg:flex-row items-center gap-12"
                        variants={itemVariants}
                    >
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold text-amber-500 dark:text-amber-400">
                                About Me
                            </h1>
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Hello! I'm Yared, a passionate software engineer
                                and educator with a diverse background in both
                                technology and teaching. Over the years, I've
                                dedicated my career to not only building
                                innovative solutions but also helping others
                                learn and grow in the world of tech.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <Image
                                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                                src="https://res.cloudinary.com/dlomcic7f/image/upload/v1726840696/me/my_image_hj8kr1.jpg"
                                alt="Yared Coding School"
                                width={800}
                                height={400}
                                layout="responsive"
                            />
                        </div>
                    </motion.div>
                    {/*  */}
                    <motion.div
                        className="flex flex-col lg:flex-row gap-12"
                        variants={itemVariants}
                    >
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-amber-500 dark:text-amber-400">
                                My Journey
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                I specialize in full-stack web development, with
                                expertise in the MERN stack (MongoDB, Express,
                                React, Node.js), as well as Python and
                                JavaScript. My passion for teaching has led me
                                to work with students of all ages, from kids
                                learning the basics of coding to professionals
                                mastering advanced subjects like data science
                                and digital marketing.
                            </p>
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-amber-500 dark:text-amber-400">
                                Areas of Expertise
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Full-stack Web Development (MERN)",
                                    "Python and JavaScript Development",
                                    "Digital Marketing Strategy",
                                    "Data Science and Analytics",
                                    "Teaching & Mentorship in Coding and Tech",
                                ].map((skill, index) => (
                                    <div
                                        key={index}
                                        variant="secondary"
                                        className="text-sm py-1 px-3 bg-slate-400"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div>
                            <div className="p-6 space-y-4">
                                <h2 className="text-3xl font-bold text-amber-500 dark:text-amber-400">
                                    My Teaching Approach
                                </h2>
                                <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                                    <li>
                                        <span className="font-bold">
                                            Simplified Learning:
                                        </span>{" "}
                                        I break down complex concepts into
                                        easy-to-understand lessons, making sure
                                        students grasp the fundamentals before
                                        diving into more advanced topics.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Engagement & Fun:
                                        </span>{" "}
                                        I create fun and interactive learning
                                        experiences, especially when teaching
                                        kids, to keep them engaged and excited
                                        about coding.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Practical Application:
                                        </span>{" "}
                                        I focus on hands-on projects and
                                        real-world applications, ensuring that
                                        students can apply what they learn in
                                        practical scenarios.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            AI Integration:
                                        </span>{" "}
                                        I incorporate AI tools into my lessons,
                                        helping students learn faster and more
                                        efficiently by utilizing modern
                                        technology.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Tailored Content:
                                        </span>{" "}
                                        I customize my teaching to match the
                                        student’s skill level, whether they are
                                        complete beginners or looking to expand
                                        their expertise.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Short, Focused Lessons:
                                        </span>{" "}
                                        I prefer delivering content in short,
                                        manageable lessons that focus on key
                                        concepts, making learning digestible and
                                        less overwhelming.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Supportive Mentorship:
                                        </span>{" "}
                                        I provide continuous support to my
                                        students, guiding them through
                                        challenges and helping them build
                                        confidence in their abilities.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="mb-16 mt-10" variants={itemVariants}>
                        <h2 className="text-2xl font-bold mb-4">
                            My Credentials
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Carousel
                                showArrows={true}
                                showStatus={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={5000}
                                className="rounded-lg lg:w-[45%] shadow-lg overflow-hidden"
                            >
                                {certificateImages.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image}
                                            alt={`Project ${index + 1}`}
                                            className="object-cover p-6 h-96 w-full"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                            <Carousel
                                showArrows={true}
                                showStatus={false}
                                showThumbs={false}
                                infiniteLoop={true}
                                autoPlay={true}
                                interval={5000}
                                className="rounded-lg lg:w-[45%] shadow-lg overflow-hidden"
                            >
                                {certificateImages.map((image, index) => (
                                    <div key={index}>
                                        <img
                                            src={image}
                                            alt={`Project ${index + 1}`}
                                            className="object-cover p-6 h-96 w-full"
                                        />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <div>
                            <div className="p-6 space-y-4">
                                <h2 className="text-3xl font-bold text-amber-500 dark:text-amber-400">
                                    Current Projects
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    I'm currently working on several exciting
                                    projects, including developing an online
                                    course platform and creating unique
                                    educational content for platforms like Udemy
                                    and YouTube. My teaching methods blend
                                    traditional approaches with cutting-edge AI
                                    tools, making the learning process more
                                    efficient and enjoyable. I'm also developing
                                    a web application to simplify online
                                    learning, incorporating features like course
                                    listings, digital marketing strategies, and
                                    coding challenges.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
                            Whether you're looking to learn new skills or need
                            help building a custom software solution, I'm here
                            to help. Feel free to reach out if you want to
                            collaborate on a project, learn more about my work,
                            or just chat about the latest tech trends!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
