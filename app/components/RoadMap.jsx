"use client";

import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    programmingCourses,
    aiAndMachineLearning,
    dataAnalysis,
} from "../../assets/newCourses.js";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide, Swiper } from "swiper/react";

const page = () => {
    // Filter arrays to only include first 6 items
    const limitedProgrammingCourses = programmingCourses.slice(0, 6);
    const limitedAiCourses = aiAndMachineLearning.slice(0, 6);
    const limitedDataCourses = dataAnalysis.slice(0, 6);

    return (
        <main className="flex items-center justify-center py-16">
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
                    <div className="container text-center flex flex-col items-center mb-4">
                        <h1 className="text-3xl lg:text-4xl mb-4">
                            Learning Paths
                        </h1>
                        <p className="text-base lg:text-xl max-w-prose">
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
                    spaceBetween={20}
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
                    className="w-full h-[700px] relative"
                >
                    <SwiperSlide>
                        <div className="h-full flex flex-col">
                            <h2 className="text-2xl mb-4">Web Development</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100%-3rem)]">
                                {limitedProgrammingCourses.map((subject) => (
                                    <div
                                        key={subject.title}
                                        className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative h-full flex flex-col"
                                    >
                                        <div className="h-[160px] relative overflow-hidden">
                                            <Link
                                                className="relative w-full h-full inline-block"
                                                href={`/courseDetail/webdev/${subject.title}`}
                                            >
                                                <Image
                                                    alt="Yared Coding School"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    fetchPriority="high"
                                                    decoding="async"
                                                    className="w-full h-full"
                                                    src={subject.image}
                                                />
                                            </Link>
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <Link
                                                className="font-semibold no-underline hover:underline"
                                                href={`/courseDetail/webdev/${subject.title}`}
                                            >
                                                <h3 className="text-lg mb-2 text-yellow-200">
                                                    {subject.title}
                                                </h3>
                                            </Link>
                                            <p className="text-sm text-justify">
                                                {subject.short}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex flex-col">
                            <h2 className="text-2xl mb-4">
                                AI and Programming Languages
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100%-3rem)]">
                                {limitedAiCourses.map((subject) => (
                                    <div
                                        key={subject.title}
                                        className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative h-full flex flex-col"
                                    >
                                        <div className="h-[160px] relative overflow-hidden">
                                            <Link
                                                className="relative w-full h-full inline-block"
                                                href={`/courseDetail/AI&ML/${subject.title}`}
                                            >
                                                <Image
                                                    alt="Fundamentals"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    fetchPriority="high"
                                                    decoding="async"
                                                    className="w-full h-full"
                                                    src={subject.image}
                                                />
                                            </Link>
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <Link
                                                className="font-semibold no-underline hover:underline"
                                                href={`/courseDetail/AI&ML/${subject.title}`}
                                            >
                                                <h3 className="text-lg mb-2 text-yellow-200">
                                                    {subject.title}
                                                </h3>
                                            </Link>
                                            <p className="text-sm text-justify">
                                                {subject.short}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-full flex flex-col">
                            <h2 className="text-2xl mb-4">
                                Data Analysis and Digital Marketing
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100%-3rem)]">
                                {limitedDataCourses.map((subject) => (
                                    <div
                                        key={subject.title}
                                        className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative h-full flex flex-col"
                                    >
                                        <div className="h-[160px] relative overflow-hidden">
                                            <Link
                                                className="relative w-full h-full inline-block"
                                                href={`/courseDetail/DataAnalysis/${subject.title}`}
                                            >
                                                <Image
                                                    alt="Yared Coding School"
                                                    layout="fill"
                                                    objectFit="cover"
                                                    fetchPriority="high"
                                                    decoding="async"
                                                    className="w-full h-full"
                                                    src={subject.image}
                                                />
                                            </Link>
                                        </div>
                                        <div className="p-4 flex-grow">
                                            <Link
                                                className="font-semibold no-underline hover:underline"
                                                href={`/courseDetail/DataAnalysis/${subject.title}`}
                                            >
                                                <h3 className="text-lg mb-2 text-yellow-200">
                                                    {subject.title}
                                                </h3>
                                            </Link>
                                            <p className="text-sm text-justify">
                                                {subject.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </main>
    );
};

export default page;
