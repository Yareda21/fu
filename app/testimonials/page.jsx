"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Rating, Card, CardContent, Typography, Avatar } from "@mui/material";
import {
    workImages,
    certificateImages,
    testimonials,
} from "@/assets/testimonyResource";

export default function TestimonialPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-12">
                    What People Say About My Work
                </h1>

                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-2xl text-center font-bold mb-4">
                        See My Work in Action on different schools
                    </h2>
                </div>

                {/* Photo Carousel */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">My Classes</h2>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={5000}
                        className="rounded-lg shadow-lg overflow-hidden"
                    >
                        {workImages.map((image, index) => (
                            <div key={index}>
                                <img
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    className="object-cover h-96 w-full"
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Testimonial Cards */}
                <div>
                    <h2 className="text-2xl font-bold mb-8">
                        Client Testimonials
                    </h2>
                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={5000}
                        className="rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-800 text-white shadow-xl transition-transform duration-300 hover:scale-105"
                                >
                                    <CardContent className="flex flex-col items-center text-center">
                                        <Avatar
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            className="w-24 h-24 mb-4"
                                        />
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            className="mb-2"
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            className="mb-2 text-gray-400"
                                        >
                                            {testimonial.role}
                                        </Typography>
                                        <Rating
                                            value={testimonial.rating}
                                            readOnly
                                            className="mb-4"
                                        />
                                        <Typography
                                            variant="body2"
                                            className="mb-4 italic"
                                        >
                                            "{testimonial.content}"
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            className="text-gray-400"
                                        >
                                            {testimonial.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card
                                    key={index}
                                    className="bg-gray-800 text-white shadow-xl transition-transform duration-300 hover:scale-105"
                                >
                                    <CardContent className="flex flex-col items-center text-center">
                                        <Avatar
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            className="w-24 h-24 mb-4"
                                        />
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            className="mb-2"
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            className="mb-2 text-gray-400"
                                        >
                                            {testimonial.role}
                                        </Typography>
                                        <Rating
                                            value={testimonial.rating}
                                            readOnly
                                            className="mb-4"
                                        />
                                        <Typography
                                            variant="body2"
                                            className="mb-4 italic"
                                        >
                                            "{testimonial.content}"
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            className="text-gray-400"
                                        >
                                            {testimonial.email}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Carousel>
                </div>

                {/* Testimonial Submission Form */}
                <div className="mb-16 mt-10">
                    <h2 className="text-2xl font-bold mb-4">
                        Share Your Experience
                    </h2>
                    <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="role"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Your Role
                                </label>
                                <input
                                    type="text"
                                    id="role"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                    placeholder="e.g., Student, Teacher, Parent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="rating"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Rating
                                </label>
                                <Rating
                                    name="rating"
                                    id="rating"
                                    className="text-yellow-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="testimonial"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Your Testimonial
                                </label>
                                <textarea
                                    id="testimonial"
                                    rows="4"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                    placeholder="Share your experience..."
                                ></textarea>
                            </div>
                            <div>
                                <label
                                    htmlFor="photo"
                                    className="block text-sm font-medium text-gray-300 mb-2"
                                >
                                    Your Photo (Optional)
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    accept="image/*"
                                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 transform hover:scale-105"
                            >
                                Submit Testimonial
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
