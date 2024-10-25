"use client";

import { useEffect, useState } from "react";
import {
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [buttonColor, setButtonColor] = useState("bg-indigo-600");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [resetEmail, setResetEmail] = useState("");
    const [showResetForm, setShowResetForm] = useState(false);
    const [resetMessage, setResetMessage] = useState(null);
    const router = useRouter();

    const title = "Join Us | Yared";
    const description =
        "To access all of our resource, Sign up for free and just study! ";
    const url = "https://yared-coding.vercel.app/courseDetail";

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

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            // Sign in the user
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            // Fetch user data from Firestore
            const userDoc = await getDoc(doc(db, "reg_student", user.uid));
            const userData = userDoc.data();
            const userQuery = encodeURIComponent(JSON.stringify(userData));
            router.push(`/access?user=${userQuery}`);
        } catch (error) {
            console.error(error);
            setError("Invalid email or password.");
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setResetMessage(null);
        setError(null);

        try {
            await sendPasswordResetEmail(auth, resetEmail);
            setResetMessage("Password reset email sent successfully.");
        } catch (error) {
            console.error(error);
            setError("Failed to send password reset email. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Student Login
                    </h2>
                </div>

                {!showResetForm ? (
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        {/* <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        /> */}
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label
                                    htmlFor="email-address"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm mt-2">
                                {error}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className={`group ${buttonColor} relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                onClick={() => setButtonColor("bg-red-600")}
                            >
                                Sign in
                            </button>
                        </div>
                        <a
                            href="/"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            If you havent registered yet, go registration page
                        </a>

                        <div className="text-center mt-4">
                            <button
                                type="button"
                                onClick={() => setShowResetForm(true)}
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    </form>
                ) : (
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={handlePasswordReset}
                    >
                        <div>
                            <label htmlFor="reset-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="reset-email"
                                name="reset-email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email address"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm mt-2">
                                {error}
                            </div>
                        )}
                        {resetMessage && (
                            <div className="text-green-500 text-sm mt-2">
                                {resetMessage}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Send Password Reset Email
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <button
                                type="button"
                                onClick={() => setShowResetForm(false)}
                                className="text-sm text-indigo-600 hover:text-indigo-500"
                            >
                                Back to Login
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
