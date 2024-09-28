"use client";

import React from "react";
import { roadMap } from "@/assets/newCourses";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    programmingCourses,
    aiAndMachineLearning,
    dataAnalysis,
} from "@/assets/newCourses";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

import { SwiperSlide, Swiper } from "swiper/react";

const page = () => {
    return (
        <main className="flex items-center justify-center py-[100px]">
            <div className="container">
                <div className="relative">
                    {/* <Image
                        alt="background"
                        fetchPriority="high"
                        width="1572"
                        height="795"
                        decoding="async"
                        className="absolute -top-32 -z-10"
                        style={{ color: "transparent" }}
                        src="/_next/static/media/bg-grid.8abf9bc6.svg"
                    /> */}
                    <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
                        <h1 className="lg:text-5xl mb-8">Learning Paths</h1>
                        <p className="text-lg lg:text-2xl max-w-prose">
                            Discover your optimal learning path to reach your
                            full potential.
                        </p>
                    </div>
                </div>

                {/* Custom navigation buttons outside the Swiper */}
                {/* <div className="flex justify-between z-50 relative top-[100%] w-full transform -translate-y-1/2">
                    <div className="swiper-button-prev">Previous</div>
                    <div className="swiper-button-next">Next</div>
                </div> */}

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: true,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="w-full min-h-screen relative"
                >
                    <SwiperSlide>
                        <h1 className=" text-3xl mb-4">Web Development</h1>
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 undefined">
                            {programmingCourses.map((subject) => {
                                return (
                                    <div
                                        key={subject.title}
                                        className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative "
                                    >
                                        <div className="h-[196px] relative">
                                            <Link
                                                className="relative w-full h-full inline-block"
                                                href={`/courseDetail/webdev/${subject.title}`}
                                            >
                                                <Image
                                                    alt="Fundamentals"
                                                    layout="fill"
                                                    fetchPriority="high"
                                                    decoding="async"
                                                    className="object-cover absolute inset-0 h-full w-full bg-transparent text-transparent"
                                                    src={subject.image}
                                                />
                                            </Link>
                                        </div>
                                        <div className="p-6">
                                            <Link
                                                className="font-semibold no-underline hover:underline"
                                                href={`/courseDetail/webdev/${subject.title}`}
                                            >
                                                <h2 className="text-xl mb-0 text-yellow-200">
                                                    {subject.title}
                                                </h2>
                                            </Link>
                                            <p className=" text-justify">
                                                {subject.short}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className=" text-3xl mb-4">
                            AI and Programming Languages
                        </h1>
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 undefined">
                            {aiAndMachineLearning.map((subject) => {
                                return (
                                    <div
                                        key={subject.title}
                                        className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative "
                                    >
                                        <div className="h-[196px] text-yellow-400 relative">
                                            <Link
                                                className="relative w-full h-full inline-block"
                                                href={`/courseDetail/AI&ML/${subject.title}`}
                                            >
                                                <Image
                                                    alt="Fundamentals"
                                                    layout="fill"
                                                    fetchPriority="high"
                                                    decoding="async"
                                                    className="object-cover absolute inset-0 h-full w-full bg-transparent text-transparent"
                                                    src={subject.image}
                                                />
                                            </Link>
                                        </div>
                                        <div className="p-6">
                                            <Link
                                                className="font-semibold no-underline hover:underline"
                                                href={`/courseDetail/AI&ML/${subject.title}`}
                                            >
                                                <h2 className="text-xl mb-0 text-yellow-200">
                                                    {subject.title}
                                                </h2>
                                            </Link>
                                            <p className=" text-justify">
                                                {subject.short}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className=" text-3xl mb-4">
                            Data Analysis and Digital Marketing
                        </h1>
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 undefined">
                            {dataAnalysis.map((subject) => {
                                return (
                                    <div
                                        key={subject.title}
                                        className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative "
                                    >
                                        <div className="h-[196px] relative">
                                            <Link
                                                className="relative w-full h-full inline-block"
                                                href={`/courseDetail/DataAnalysis/${subject.title}`}
                                            >
                                                <Image
                                                    alt="Fundamentals"
                                                    layout="fill"
                                                    fetchPriority="high"
                                                    decoding="async"
                                                    className="object-cover absolute inset-0 h-full w-full bg-transparent text-transparent"
                                                    src={subject.image}
                                                />
                                            </Link>
                                        </div>
                                        <div className="p-6">
                                            <Link
                                                className="font-semibold no-underline hover:underline"
                                                href={`/courseDetail/DataAnalysis/${subject.title}`}
                                            >
                                                <h2 className="text-xl mb-0 text-yellow-200 ">
                                                    {subject.title}
                                                </h2>
                                            </Link>
                                            <p className=" text-justify">
                                                {subject.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    );
};

export default page;
