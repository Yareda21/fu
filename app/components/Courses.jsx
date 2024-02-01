"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import tenor from "@/public/tenor.gif";
import h from "@/public/fu_images/h.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import details from "@/assets/courseDetail";

// import "./styles.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <h1 className="flex text-center text-3xl justify-center p-10">
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
          className="mySwiper h-[100vh] w-full"
        >
          <SwiperSlide>
            <section className="text-gray-400  body-font">
              <div className="container px-5 py-24 mx-auto">
                <Image
                  src={h}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                  className=" z-0 "
                />

                <div className="flex flex-wrap  -m-4">
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="flex flex-col z-1 mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Shooting Stars
                      </h2>
                      <p className="mt-1">$21.15</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Neptune
                      </h2>
                      <p className="mt-1">$12.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The 400 Blows
                      </h2>
                      <p className="mt-1">$18.40</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Shooting Stars
                      </h2>
                      <p className="mt-1">$21.15</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Neptune
                      </h2>
                      <p className="mt-1">$12.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The 400 Blows
                      </h2>
                      <p className="mt-1">$18.40</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="text-gray-400 bg-gray-900 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Shooting Stars
                      </h2>
                      <p className="mt-1">$21.15</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Neptune
                      </h2>
                      <p className="mt-1">$12.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The 400 Blows
                      </h2>
                      <p className="mt-1">$18.40</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Shooting Stars
                      </h2>
                      <p className="mt-1">$21.15</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Neptune
                      </h2>
                      <p className="mt-1">$12.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The 400 Blows
                      </h2>
                      <p className="mt-1">$18.40</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="text-gray-400 bg-gray-900 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Shooting Stars
                      </h2>
                      <p className="mt-1">$21.15</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Neptune
                      </h2>
                      <p className="mt-1">$12.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The 400 Blows
                      </h2>
                      <p className="mt-1">$18.40</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The Catalyzer
                      </h2>
                      <p className="mt-1">$16.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Shooting Stars
                      </h2>
                      <p className="mt-1">$21.15</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        Neptune
                      </h2>
                      <p className="mt-1">$12.00</p>
                    </div>
                  </div>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <Image
                        width={300}
                        height={300}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={tenor}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        CATEGORY
                      </h3>
                      <h2 className="text-white title-font text-lg font-medium">
                        The 400 Blows
                      </h2>
                      <p className="mt-1">$18.40</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section className="text-gray-400 bg-gray-900 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {details &&
                    details.map((ele) => {
                      return (
                        <div
                          key={ele.id}
                          className="lg:w-1/4 md:w-1/2 p-4 w-full"
                        >
                          <a className="block relative h-48 rounded overflow-hidden">
                            <Image
                              width={300}
                              height={300}
                              alt="ecommerce"
                              className="object-cover object-center w-full h-full block"
                              src={tenor}
                            />
                          </a>
                          <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                              {ele.title}
                            </h3>
                            <h2 className="text-white title-font text-lg font-medium">
                              {ele.quote}
                            </h2>
                            <p className="mt-1">
                              {ele.subtitle.map((eles) => {
                                return eles.title;
                              })}
                            </p>
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
