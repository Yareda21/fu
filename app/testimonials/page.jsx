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

                {/* Photo Carousel - certificate */}
                <div className="mb-16 mt-10">
                    <h2 className="text-2xl font-bold mb-4">My Credentials</h2>
                    <div className="flex gap-4 justify-center">
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
                </div>
            </div>
        </div>
    );
}
