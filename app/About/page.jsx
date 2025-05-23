"use client";

import React, { useEffect } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { motion } from "framer-motion";

import { Carousel } from "react-responsive-carousel";
import { certificateImages } from "../../assets/certificateImages.js";

export default function About() {
    const title = "About Me | Yared Coding School";
    const description =
        "Learn about Yared Coding School, our mission, vision, and the team behind our courses.";
    const url = "https://yared-coding.vercel.app/about";

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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4 py-16">
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
                            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-500">
                                About Me
                            </h1>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                Hello! I'm Yared, a passionate software engineer
                                and educator with a diverse background in both
                                technology and teaching. Over the years, I've
                                dedicated my career to not only building
                                innovative solutions but also helping others
                                learn and grow in the world of tech.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                                <Image
                                    src="https://res.cloudinary.com/dlomcic7f/image/upload/v1726840696/me/my_image_hj8kr1.jpg"
                                    alt="Yared Coding School"
                                    width={800}
                                    height={400}
                                    layout="responsive"
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                    {/*  */}
                    <motion.div
                        className="flex flex-col lg:flex-row gap-12"
                        variants={itemVariants}
                    >
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-500">
                                My Journey
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-500">
                                Areas of Expertise
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    "Full-stack Web Development (MERN)",
                                    "Python and JavaScript Development",
                                    "Digital Marketing Strategy",
                                    "Data Science and Analytics",
                                    "Teaching & Mentorship in Coding and Tech",
                                ].map((skill, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/10 dark:from-amber-400/10 dark:to-amber-500/10 rounded-full text-amber-700 dark:text-amber-300 border border-amber-500/20 dark:border-amber-400/20 hover:from-amber-500/20 hover:to-amber-600/20 transition-all duration-300"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-r from-amber-500/5 to-amber-600/5 dark:from-amber-400/5 dark:to-amber-500/5 rounded-2xl p-8"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-500 mb-6">
                            My Teaching Approach
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Simplified Learning",
                                    description:
                                        "I break down complex concepts into easy-to-understand lessons, making sure students grasp the fundamentals before diving into more advanced topics.",
                                },
                                {
                                    title: "Engagement & Fun",
                                    description:
                                        "I create fun and interactive learning experiences, especially when teaching kids, to keep them engaged and excited about coding.",
                                },
                                {
                                    title: "Practical Application",
                                    description:
                                        "I focus on hands-on projects and real-world applications, ensuring that students can apply what they learn in practical scenarios.",
                                },
                                {
                                    title: "AI Integration",
                                    description:
                                        "I incorporate AI tools into my lessons, helping students learn faster and more efficiently by utilizing modern technology.",
                                },
                                {
                                    title: "Tailored Content",
                                    description:
                                        "I customize my teaching to match the student's skill level, whether they are complete beginners or looking to expand their expertise.",
                                },
                                {
                                    title: "Short, Focused Lessons",
                                    description:
                                        "I prefer delivering content in short, manageable lessons that focus on key concepts, making learning digestible and less overwhelming.",
                                },
                                {
                                    title: "Supportive Mentorship",
                                    description:
                                        "I provide continuous support to my students, guiding them through challenges and helping them build confidence in their abilities.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-amber-600 dark:text-amber-400 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="space-y-8" variants={itemVariants}>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-500 text-center">
                            My Credentials
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-full max-w-4xl">
                                <Carousel
                                    showArrows={true}
                                    showStatus={false}
                                    showThumbs={false}
                                    infiniteLoop={true}
                                    autoPlay={true}
                                    interval={5000}
                                    className="rounded-2xl shadow-2xl overflow-hidden"
                                    renderArrowPrev={(
                                        onClickHandler,
                                        hasPrev,
                                        label
                                    ) =>
                                        hasPrev && (
                                            <button
                                                onClick={onClickHandler}
                                                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-amber-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 19l-7-7 7-7"
                                                    />
                                                </svg>
                                            </button>
                                        )
                                    }
                                    renderArrowNext={(
                                        onClickHandler,
                                        hasNext,
                                        label
                                    ) =>
                                        hasNext && (
                                            <button
                                                onClick={onClickHandler}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                                            >
                                                <svg
                                                    className="w-6 h-6 text-amber-500"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </button>
                                        )
                                    }
                                >
                                    {certificateImages.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={image}
                                                alt={`Certificate ${index + 1}`}
                                                className="object-contain p-8 h-[500px] w-full bg-white dark:bg-gray-800"
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-r from-amber-500/5 to-amber-600/5 dark:from-amber-400/5 dark:to-amber-500/5 rounded-2xl p-8"
                        variants={itemVariants}
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:to-amber-500 mb-6">
                            Current Projects
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            I'm currently working on several exciting projects,
                            including developing an online course platform and
                            creating unique educational content for platforms
                            like Udemy and YouTube. My teaching methods blend
                            traditional approaches with cutting-edge AI tools,
                            making the learning process more efficient and
                            enjoyable. I'm also developing a web application to
                            simplify online learning, incorporating features
                            like course listings, digital marketing strategies,
                            and coding challenges.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        variants={itemVariants}
                    >
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Whether you're looking to learn new skills or need
                            help building a custom software solution, I'm here
                            to help. Feel free to reach out if you want to
                            collaborate on a project, learn more about my work,
                            or just chat about the latest tech trends!
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
