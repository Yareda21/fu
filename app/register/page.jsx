"use client";
import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";

import { db, auth } from "@/firebase/firebase";
import {
    createUserWithEmailAndPassword,
    sendEmailVerification,
} from "firebase/auth";

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <p className="text-lg">{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
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
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

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
                subject: searchParams.title,
                registrationDate: new Date(),
            });

            console.log("User account created:", user);

            setName("");
            setPhone("");
            setEmail("");
            setPassword("");
            setAlertMessage(
                "Registration Successful! A verification email has been sent to your email address. Please verify your email to complete the registration."
            );
            setShowAlert(true);

            // Redirect to the homepage after 4 seconds (optional)
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
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="hidden lg:relative lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/VoRz7xfF9m0"
                        title="Final Intro"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </section>

                <main className="flex items-center bg-slate-800 text-white justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    {showAlert && (
                        <CustomAlert
                            message={alertMessage}
                            onClose={() => setShowAlert(false)}
                        />
                    )}
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="text-center text-amber-500 text-2xl">
                            Registration <br />{" "}
                            {searchParams && searchParams.title}
                        </h1>
                        <form
                            method="post"
                            className="mt-8 grid grid-cols-6 gap-6"
                            onSubmit={addText}
                        >
                            {/* Full Name */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-white"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    autoCapitalize="on"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoComplete="off"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            {/* Subject */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Subject"
                                    className="block text-sm font-medium text-white"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                    value={searchParams.title || ""}
                                    readOnly
                                />
                            </div>
                            {/* Email */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    autoCapitalize="none"
                                    name="email"
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            {/* Password */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete="off"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            {/* Phone Number */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-white"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    inputMode="numeric"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name="phone"
                                    autoComplete="off"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            {/* Marketing Consent */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="MarketingAccept"
                                    className="flex gap-4"
                                >
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        defaultChecked
                                    />
                                    <span className="text-sm text-white">
                                        Please Call and Remind Me at +251 922 76
                                        15 94
                                    </span>
                                </label>
                            </div>
                            {/* Terms of Use */}
                            <div className="col-span-6">
                                <p className="text-sm text-white">
                                    By creating an account, you agree to our
                                    <a
                                        href="#"
                                        className="text-white underline"
                                    >
                                        {" "}
                                        terms and conditions{" "}
                                    </a>
                                    and
                                    <a
                                        href="#"
                                        className="text-white underline"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </p>
                            </div>
                            {/* Create Account Button */}
                            <div className="flex-col col-span-6 items-center gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    Register For Class
                                </button>

                                <ul className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    <li>
                                        Go to head office in Megenagna Metebaber
                                        Building for class Schedule
                                    </li>
                                    <li>
                                        Classes will be arranged with your
                                        specific Instructor
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default Page;
