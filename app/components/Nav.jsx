"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.png";
import { motion } from "framer-motion";
import MyUser from "@/firebase/MyUser";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = MyUser();
    const router = useRouter();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <header className=" sticky top-0 left-0  right-0 bg-[#001d62] gray-900 z-40">
            <div className="mx-auto shadow-md flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-teal-600 dark:text-teal-300" href="/">
                    <Image
                        src={logo}
                        alt="Yared Coding School"
                        width={100}
                        height={100}
                    />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav
                        aria-label="Global"
                        className={`${
                            isMenuOpen ? "block h-screen" : "hidden"
                        } md:block absolute md:relative top-16 left-0 right-0 bg-[#001d62] md:top-0`}
                    >
                        <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                            className="flex flex-col md:flex-row items-center gap-6 py-4 md:py-0 text-base"
                        >
                            <motion.li variants={itemVariants}>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="/About"
                                >
                                    About Me
                                </a>
                            </motion.li>

                            <motion.li variants={itemVariants}>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="/testimonials"
                                >
                                    Testimonials
                                </a>
                            </motion.li>

                            <motion.li variants={itemVariants}>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="/jobs"
                                >
                                    Online Jobs
                                </a>
                            </motion.li>
                            <motion.li
                                variants={itemVariants}
                                className="md:hidden"
                            >
                                {user ? (
                                    <button
                                        onClick={handleLogout}
                                        className="block my-1 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <a
                                        className="block my-1 rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                                        href="/loginStudent"
                                        onClick={closeMenu}
                                    >
                                        Login
                                    </a>
                                )}
                            </motion.li>
                        </motion.ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex sm:gap-4">
                            {user && (
                                <a
                                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                                    href="/dm"
                                >
                                    DM Exercise
                                </a>
                            )}
                            {user ? (
                                <button
                                    onClick={handleLogout}
                                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                                >
                                    Logout
                                </button>
                            ) : (
                                <a
                                    className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                                    href="/loginStudent"
                                >
                                    Login
                                </a>
                            )}
                        </div>

                        <div>
                            <button
                                onClick={toggleMenu}
                                className="block rounded p-2.5 text-gray-600 transition hover:text-gray-600/75 bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden"
                            >
                                <span className="sr-only">Toggle menu</span>
                                {isMenuOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;
