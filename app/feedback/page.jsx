"use client";
import React, { useState } from "react";
import { db } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import MyUser from "@/firebase/MyUser";

const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [feedbackType, setFeedbackType] = useState("");
    const [feedbackText, setFeedbackText] = useState("");
    const [suggestions, setSuggestions] = useState("");
    const [message, setMessage] = useState("");
    const user = MyUser();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!rating || !feedbackType || !feedbackText) {
            setMessage("Please fill in all required fields.");
            return;
        }

        try {
            await setDoc(doc(db, "feedback", user.uid), {
                name: name,
                email: email,
                rating: rating,
                feedbackType: feedbackType,
                feedback: feedbackText,
                suggestion: suggestions,
                timestamp: new Date(),
            });

            setMessage("Thank you for your feedback!");
            setName("");
            setEmail("");
            setRating("");
            setFeedbackType("");
            setFeedbackText("");
            setSuggestions("");
        } catch (error) {
            console.error("Error submitting feedback:", error);
            setMessage("Error submitting feedback. Please try again.");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white text-black rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                We value your feedback!
            </h2>
            {message && (
                <p className="text-center text-green-600 mb-4">{message}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Name (optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                    type="email"
                    placeholder="Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                    type="number"
                    placeholder="Rating (1-5)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                    required
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
                />
                <input
                    type="text"
                    placeholder="Feedback Type (e.g., Course Content)"
                    value={feedbackType}
                    onChange={(e) => setFeedbackType(e.target.value)}
                    required
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-green-300"
                />
                <textarea
                    placeholder="Detailed Feedback"
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    required
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-green-300 h-28 resize-none"
                />
                <textarea
                    placeholder="Suggestions for Improvement"
                    value={suggestions}
                    onChange={(e) => setSuggestions(e.target.value)}
                    className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-green-300 h-28 resize-none"
                />
                <button
                    type="submit"
                    className="w-full p-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
