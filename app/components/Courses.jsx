"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import tenor from "@/public/tenor.gif";
import i from "@/public/fu_images/f.jpg";
import h from "@/public/fu_images/h.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  programmingCourses,
  aiAndMachineLearning,
  dataAnalysis,
} from "@/assets/newCourses";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <>
      <h1 className="flex text-center bg-blue-800 text-3xl justify-center p-10">
        Courses at our disposal
      </h1>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className=" w-full max-h-[600px] overflow-auto sm:max-h-full"
        >
          {/* Web Development and software engineering */}
          <SwiperSlide>
            <h1 className=" mb-[-60px] mt-8 text-2xl">Website Development</h1>
            <section className="text-gray-400  body-font">
              <div className="container py-24 px-3 block mx-auto ">
                <Image
                  src={h}
                  layout="fill"
                  quality={100}
                  priority
                  className=" z-[-1] opacity-90"
                />

                <div className="flex flex-wrap gap-4 p-4 justify-center max-h-[600px] overflow-auto sm:max-h-full">
                  {programmingCourses &&
                    programmingCourses.map((ele) => {
                      return (
                        <div className="lg:w-[22%] md:w-[45%] w-full border-2 hover:scale-105 border-blue-400 rounded-xl backdrop-blur-lg">
                          <div className="block relative h-48 rounded mb-2 overflow-hidden">
                            <Image
                              width={300}
                              height={300}
                              alt="ecommerce"
                              className="object-cover object-center w-full h-full block rounded-xl"
                              src={tenor}
                            />
                          </div>
                          <div className="flex flex-col z-1 px-3 mt-4">
                            <h3 className=" text-black font-bold text-xl px-2 tracking-widest mb-3">
                              {ele.title}
                            </h3>
                            <h2 className="text-white text-sm px-2 font-medium">
                              {ele.short}
                            </h2>
                            <button className="flex mx-auto my-3 text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded text-lg">
                              <Link href={`/courseDetail/webdev/${ele.title}`}>
                                Read More ...
                              </Link>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* Graphic Design and Data Analysis  */}
          <SwiperSlide>
            <h1 className=" mb-[-60px] mt-8 text-2xl">
              AI and Machine Learning
            </h1>
            <section className="text-gray-400  body-font">
              <div className="container py-24 px-3 block mx-auto ">
                <Image
                  src={i}
                  layout="fill"
                  quality={100}
                  priority
                  className=" z-[-1] opacity-90 w-full"
                />

                <div className="flex flex-wrap gap-4 p-4 justify-center max-h-[600px] overflow-auto sm:max-h-full">
                  {aiAndMachineLearning &&
                    aiAndMachineLearning.map((ele) => {
                      return (
                        <div className="lg:w-[22%] md:w-[45%] w-full border-2 hover:scale-105 border-blue-400 rounded-xl backdrop-blur-lg">
                          <a className="block relative h-48 rounded overflow-hidden">
                            <Image
                              width={300}
                              height={300}
                              alt="ecommerce"
                              className="object-cover object-center w-full h-full block rounded-xl"
                              src={tenor}
                            />
                          </a>
                          <div className="flex flex-col px-3 z-1 mt-4">
                            <h3 className=" text-black font-bold text-xl tracking-widest mb-1">
                              {ele.title}
                            </h3>
                            <h2 className="text-white text-sm font-medium">
                              {ele.short}
                            </h2>
                            <button className="flex mx-auto my-3 text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded text-lg">
                              <Link href={`/courseDetail/AI&ML/${ele.title}`}>
                                Read More ...
                              </Link>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>
          </SwiperSlide>

          {/* graphics and others  */}
          <SwiperSlide>
            <h1 className=" mb-[-60px] mt-8 text-2xl">
              Data Analysis and Graphic Design
            </h1>
            <section className="text-gray-400  body-font">
              <div className="container py-24 px-3 block mx-auto ">
                <Image
                  src={h}
                  layout="fill"
                  quality={100}
                  priority
                  className=" z-[-1] h-[105%] opacity-90"
                />

                <div className="flex flex-wrap gap-4 p-4 justify-center max-h-[600px] overflow-auto sm:max-h-full">
                  {dataAnalysis &&
                    dataAnalysis.map((ele) => {
                      return (
                        <div className="lg:w-[22%] md:w-[45%] w-full border-2 hover:scale-105 border-blue-400 rounded-xl backdrop-blur-lg">
                          <a className="block relative h-48 rounded overflow-hidden">
                            <Image
                              width={300}
                              height={300}
                              alt="ecommerce"
                              className="object-cover object-center w-full block rounded-xl"
                              src={tenor}
                            />
                          </a>
                          <div className="flex flex-col px-3 z-1 mt-4">
                            <h3 className=" text-black font-bold text-xl tracking-widest mb-1">
                              {ele.title}
                            </h3>
                            <h2 className="text-white text-sm font-medium">
                              {ele.short}
                            </h2>
                            <button className="flex mx-auto my-3 text-white bg-indigo-500 border-0 py-2 px-8 hover:bg-indigo-600 rounded text-lg">
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
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
