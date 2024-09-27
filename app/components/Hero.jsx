import React from "react";
import animal from "@/public/fu_images/animal.jpeg";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Hero = () => {
    return (
        <section className="relative">
            <div className="absolute top-0 z-10 inset-0 bg-gradient-to-r from-primary-50/30  to-white/5 bg-white/5"></div>
            <Image
                src={animal}
                fill
                // layout="fill"
                objectFit="cover"
                quality={100}
                priority
                // className=" opacity-60"
            />
            <div className="relative z-20 mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="max-w-xl text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-fuchsia-300">
                        Software Engineering Bootcamp
                        <strong className="block font-extrabold text-white">
                            {" "}
                            Online and In-Person.{" "}
                        </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-yellow-200 font-bold">
                        በዚህ የተጠናከረ የሶፍትዌር ምህንድስና ቡት ካምፕ; ተፈላጊ ችሎታዎችን ይማሩ እና እንደ
                        ሶፍትዌር መሐንዲስ አዲስ ስራ ይጀምሩ።
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <button
                            href="/roadmap"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </button>
                        <a href="tel:+251922761594">
                            <button className="block md:hidden w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-700 text-5xl shadow hoveblue-text-blue-400ose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                                Call
                            </button>
                        </a>
                    </div>
                </div>

                {/* New Social Media Links Section */}
                <div className=" flex gap-5 justify-center md:block mt-8 lg:mt-0 lg:absolute lg:right-20 lg:top-1/2 lg:transform lg:-translate-y-1/2">
                    <a
                        href=""
                        className="text-white md:text-5xl text-4xl md:mx-5  hover:text-red-400"
                    >
                        <FaFacebookSquare /> {/* Facebook Icon */}
                    </a>
                    <a
                        href=""
                        className="text-white md:text-5xl text-4xl md:mx-5  hover:text-red-400"
                    >
                        <FaYoutube /> {/* Twitter Icon */}
                    </a>
                    <a
                        href=""
                        className="text-white md:text-5xl text-4xl md:mx-5  hover:text-red-400"
                    >
                        <FaTiktok />
                        {/* Instagram Icon */}
                    </a>
                    <a
                        href=""
                        className="text-white md:text-5xl text-4xl md:mx-5  hover:text-red-400"
                    >
                        <FaLinkedin />
                        {/* Instagram Icon */}
                    </a>
                    <a
                        href=""
                        className="text-white md:text-5xl text-4xl md:mx-5  hover:text-red-400"
                    >
                        <FaGithub />
                        {/* Instagram Icon */}
                    </a>
                </div>
                {/* End of Social Media Links Section */}
            </div>
        </section>
    );
};

export default Hero;
