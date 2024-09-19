import React from "react";
import animal from "@/public/fu_images/animal.jpeg";
import Image from "next/image";

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
                        <a
                            href="/roadmap"
                            className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Get Started
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
