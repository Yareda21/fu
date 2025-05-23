"use client";
import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/firebase";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";
import {
    programmingCourses,
    aiAndMachineLearning,
    dataAnalysis,
} from "../../assets/newCourses.js";

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                <p className="text-lg mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Page = ({ searchParams }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedCourse, setSelectedCourse] = useState(
        searchParams?.title || ""
    );
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    // Combine all courses into a single array
    const allCourses = [
        ...programmingCourses,
        ...aiAndMachineLearning,
        ...dataAnalysis,
    ].map((course) => ({
        title: course.title,
        short: course.short,
        price: course.price,
    }));

    const addText = async (e) => {
        e.preventDefault();
        try {
            // Create user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            // Send verification email
            await sendEmailVerification(user);

            // Store user data in Firestore using their uid
            await setDoc(doc(db, "reg_student", user.uid), {
                name: name,
                phone: phone,
                email: email,
                subject: selectedCourse,
                registrationDate: new Date(),
            });

            console.log("User account created:", user);

            setName("");
            setPhone("");
            setEmail("");
            setPassword("");
            setSelectedCourse("");
            setAlertMessage(
                "Registration Successful! A verification email has been sent to your email address. Please verify your email to complete the registration."
            );
            setShowAlert(true);

            // Redirect to the homepage after 4 seconds
            setTimeout(() => {
                window.location.href = "/";
            }, 4000);
        } catch (e) {
            console.error(e);
            setAlertMessage("Registration Failed");
            setShowAlert(true);
        }
    };

    const title = "Register for Online Courses | Yared";
    const description =
        "Sign up for any course at Yared Coding School and learn web development, digital marketing, and more.";
    const url = "https://yared-coding.vercel.app/register";

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
        <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl">
                        <div className="grid lg:grid-cols-12">
                            {/* Video Section */}
                            <div className="lg:col-span-5 p-6 lg:p-8 bg-slate-900/50">
                                <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
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
                                <div className="mt-6 text-center">
                                    <h2 className="text-2xl font-bold text-amber-500 mb-2">
                                        Welcome to Yared Coding School
                                    </h2>
                                    <p className="text-gray-300">
                                        Join our community of learners and start
                                        your journey to success
                                    </p>
                                </div>
                            </div>

                            {/* Registration Form */}
                            <div className="lg:col-span-7 p-6 lg:p-8">
                                {showAlert && (
                                    <CustomAlert
                                        message={alertMessage}
                                        onClose={() => setShowAlert(false)}
                                    />
                                )}
                                <div className="max-w-xl mx-auto">
                                    <h1 className="text-3xl font-bold text-center text-amber-500 mb-2">
                                        Registration
                                    </h1>
                                    <form
                                        onSubmit={addText}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label
                                                    htmlFor="FirstName"
                                                    className="block text-sm font-medium text-gray-300 mb-2"
                                                >
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="FirstName"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    required
                                                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="subject"
                                                    className="block text-sm font-medium text-gray-300 mb-2"
                                                >
                                                    Select Course
                                                </label>
                                                <select
                                                    id="subject"
                                                    value={selectedCourse}
                                                    onChange={(e) =>
                                                        setSelectedCourse(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    className="w-full px-4 py-2 rounded-lg bg-gray-600 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                                >
                                                    <option value="">
                                                        Select a course
                                                    </option>
                                                    {allCourses.map(
                                                        (course, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    course.title
                                                                }
                                                            >
                                                                {course.title} -{" "}
                                                                {/* enable price later */}
                                                                {/* {
                                                                    course.price
                                                                        .individual
                                                                }{" "}
                                                                ETB */}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium  text-gray-300 mb-2"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                required
                                                className="w-full px-4 py-2 rounded-lg bg-gray-600 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium text-gray-300 mb-2"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                required
                                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                                placeholder="Create a password"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-gray-300 mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={phone}
                                                onChange={(e) =>
                                                    setPhone(e.target.value)
                                                }
                                                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        <div className="flex items-center space-x-3">
                                            <input
                                                type="checkbox"
                                                id="MarketingAccept"
                                                defaultChecked
                                                className="w-4 h-4 rounded border-gray-600 bg-white/10 text-amber-500 focus:ring-amber-500"
                                            />
                                            <label
                                                htmlFor="MarketingAccept"
                                                className="text-sm text-gray-300"
                                            >
                                                Please Call and Remind Me at
                                                +251 922 76 15 94
                                            </label>
                                        </div>

                                        <div className="text-sm text-gray-400">
                                            By creating an account, you agree to
                                            our{" "}
                                            <a
                                                href="#"
                                                className="text-amber-500 hover:text-amber-400"
                                            >
                                                terms and conditions
                                            </a>{" "}
                                            and{" "}
                                            <a
                                                href="#"
                                                className="text-amber-500 hover:text-amber-400"
                                            >
                                                privacy policy
                                            </a>
                                            .
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 px-6 text-white font-medium bg-amber-500 rounded-lg hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
                                        >
                                            Register For Class
                                        </button>

                                        <div className="mt-6 space-y-2 text-sm text-gray-400">
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                    />
                                                </svg>
                                                Go to head office in Megenagna
                                                Metebaber Building for class
                                                Schedule
                                            </p>
                                            <p className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 mr-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                    />
                                                </svg>
                                                Classes will be arranged with
                                                your specific Instructor
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
