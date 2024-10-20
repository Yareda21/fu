"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import tenor from "@/public/tenor.gif";
import b from "@/public/fu_images/2.jpg";

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

export default function App() {
    return (
        <div className="relative">
            <Image
                src={b}
                alt="Yared Coding School"
                fill
                quality={100}
                priority
                className="absolute inset-0 z-[-1] opacity-90 object-cover"
            />
            <h1 className="text-center text-3xl p-10 bg-gradient-radial from-amber-700 via-amber-900 to-black ">
                Courses at our disposal
            </h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full min-h-screen"
            >
                {/* Web Development and software engineering */}
                <SwiperSlide>
                    <h1 className="text-2xl mt-8 mb-4">Website Development</h1>
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {programmingCourses &&
                                programmingCourses.map((ele) => {
                                    return (
                                        <div
                                            key={ele.id}
                                            className="lg:w-[22%] md:w-[45%] h-[360px] w-full border-2 hover:scale-105 border-blue-400 rounded-xl backdrop-blur-lg"
                                        >
                                            <div className="block relative h-48 rounded mb-2 overflow-hidden">
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    alt="Yared Coding School"
                                                    className="object-cover object-center w-full h-full block rounded-xl"
                                                    src={ele.image}
                                                    priority
                                                />
                                            </div>
                                            <div className="flex flex-col justify-between h-[135px] items-stretch  z-1 px-3 mt-4">
                                                <div className="flex flex-col z-1 px-3 flex-grow">
                                                    <h3 className=" text-white font-bold text-xl px-2 tracking-widest mb-3">
                                                        {ele.title}
                                                    </h3>
                                                    {/* <h2 className="text-white text-sm px-2 font-medium">
                                                        {ele.short}
                                                    </h2> */}
                                                </div>
                                                <button className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded text-lg">
                                                    <Link
                                                        href={`/courseDetail/webdev/${ele.title}`}
                                                    >
                                                        Read More ...
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </SwiperSlide>

                {/* AI and Machine Learning */}
                <SwiperSlide>
                    <h1 className="text-2xl mt-8 mb-4">
                        AI and Machine Learning
                    </h1>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {aiAndMachineLearning &&
                                aiAndMachineLearning.map((ele) => {
                                    return (
                                        <div
                                            key={ele.id}
                                            className="lg:w-[22%] md:w-[45%] h-[360px] w-full border-2 hover:scale-105 border-blue-400 rounded-xl backdrop-blur-lg"
                                        >
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    alt="Yared Coding School"
                                                    className="object-cover object-center w-full h-full block rounded-xl"
                                                    src={tenor}
                                                    priority
                                                />
                                            </a>
                                            <div className="flex flex-col justify-between h-[135px] px-3 z-1">
                                                <h3 className=" text-white  font-bold text-xl tracking-widest mb-1">
                                                    {ele.title}
                                                </h3>
                                                {/* <h2 className="text-white text-sm font-medium">
                                                    {ele.short}
                                                </h2> */}
                                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded text-lg">
                                                    <Link
                                                        href={`/courseDetail/AI&ML/${ele.title}`}
                                                    >
                                                        Read More ...
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </SwiperSlide>

                {/* Data Analysis and Graphic Design */}
                <SwiperSlide>
                    <h1 className="text-2xl mt-8 mb-4">
                        Data Analysis and Graphic Design
                    </h1>
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap gap-4 justify-center">
                            {dataAnalysis &&
                                dataAnalysis.map((ele) => {
                                    return (
                                        <div
                                            key={ele.id}
                                            className="lg:w-[22%] md:w-[45%] w-full h-[360px] border-2 hover:scale-105 border-blue-400 rounded-xl backdrop-blur-lg"
                                        >
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <Image
                                                    width={300}
                                                    height={300}
                                                    alt="Yared Coding School"
                                                    className="object-cover object-center w-full block rounded-xl"
                                                    src={tenor}
                                                    priority
                                                />
                                            </a>
                                            <div className="flex flex-col justify-between h-[135px] px-3 z-1">
                                                <h3 className=" text-white font-bold text-xl tracking-widest">
                                                    {ele.title}
                                                </h3>
                                                {/* <h2 className="text-white text-sm font-medium">
                                                    {ele.short}
                                                </h2> */}
                                                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded text-lg">
                                                    <Link
                                                        href={`/courseDetail/DataAnalysis/${ele.title}`}
                                                    >
                                                        Read More ...
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
