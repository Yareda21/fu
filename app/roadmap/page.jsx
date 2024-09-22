import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <main className="flex items-center justify-center py-4 px-12">
            <div className="container">
                <div className="relative">
                    <Image
                        alt="background"
                        fetchPriority="high"
                        width="1572"
                        height="795"
                        decoding="async"
                        className="absolute -top-32 -z-10"
                        style={{ color: "transparent" }}
                        src="/_next/static/media/bg-grid.8abf9bc6.svg"
                    />
                    <div className="container text-center flex flex-col items-center mb-6 md:my-6 lg:my-10">
                        <h1 className="lg:text-5xl mb-8">Learning Paths</h1>
                        <p className="text-lg lg:text-2xl max-w-prose">
                            Discover your optimal learning path to reach your
                            full potential.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 undefined">
                    <div className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative ">
                        <div className="h-[196px] relative">
                            <Link
                                className="relative w-full h-full inline-block"
                                href="/p/fundamentals"
                            >
                                <Image
                                    alt="Fundamentals"
                                    layout="fill"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="object-cover absolute inset-0 h-full w-full bg-transparent text-transparent"
                                    src="http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/fundamentals.svg"
                                />
                            </Link>
                        </div>
                        <div className="p-6">
                            <Link
                                className="font-semibold no-underline hover:underline"
                                href="/p/fundamentals"
                            >
                                <h2 className="text-xl mb-0">Fundamentals</h2>
                            </Link>
                            <p>
                                Essential courses that anyone pursuing Link
                                career as Link professional software engineer
                                should take. Data structures, algorithms, design
                                patterns, and more!
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative ">
                        <div className="h-[196px] relative">
                            <Link
                                className="relative w-full h-full inline-block"
                                href="/p/front-end"
                            >
                                <Image
                                    layout="fill"
                                    alt="Front-end Development"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="object-cover absolute h-full w-full inset-0 bg-transparent text-transparent"
                                    src="http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/front-end.svg"
                                />
                            </Link>
                        </div>
                        <div className="p-6">
                            <Link
                                className="font-semibold no-underline hover:underline"
                                href="/p/front-end"
                            >
                                <h2 className="text-xl mb-0">
                                    Front-end Development
                                </h2>
                            </Link>
                            <p>
                                All the courses you need to build beautiful
                                websites. HTML, CSS, JavaScript, React, and
                                more!
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative ">
                        <div className="h-[196px] relative">
                            <Link
                                className="relative w-full h-full inline-block"
                                href="/p/back-end"
                            >
                                <Image
                                    layout="fill"
                                    alt="Back-end Development"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="object-cover absolute h-full w-full inset-0 bg-transparent text-transparent"
                                    src="http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/back-end.svg"
                                />
                            </Link>
                        </div>
                        <div className="p-6">
                            <Link
                                className="font-semibold no-underline hover:underline"
                                href="/p/back-end"
                            >
                                <h2 className="text-xl mb-0">
                                    Back-end Development
                                </h2>
                            </Link>
                            <p>
                                All the courses you need to build powerful APIs
                                for web and mobile apps. Node, Django, ASP.NET
                                MVC, MySQL, and more!
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative ">
                        <div className="h-[196px] relative">
                            <Link
                                className="relative w-full h-full inline-block"
                                href="/p/mobile-development"
                            >
                                <Image
                                    layout="fill"
                                    alt="Mobile Development"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="object-cover absolute h-full w-full inset-0 bg-transparent text-transparent"
                                    src="http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/mobile.svg"
                                />
                            </Link>
                        </div>
                        <div className="p-6">
                            <Link
                                className="font-semibold no-underline hover:underline"
                                href="/p/mobile-development"
                            >
                                <h2 className="text-xl mb-0">
                                    Mobile Development
                                </h2>
                            </Link>
                            <p>
                                All the courses you need to build professional,
                                cross-platform mobile apps using React Native.
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative ">
                        <div className="h-[196px] relative">
                            <Link
                                className="relative w-full h-full inline-block"
                                href="/p/game-development"
                            >
                                <Image
                                    alt="Game Development"
                                    layout="fill"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="object-cover absolute h-full w-full inset-0 bg-transparent text-transparent"
                                    src="http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/game.svg"
                                />
                            </Link>
                        </div>
                        <div className="p-6">
                            <Link
                                className="font-semibold no-underline hover:underline"
                                href="/p/game-development"
                            >
                                <h2 className="text-xl mb-0">
                                    Game Development
                                </h2>
                            </Link>
                            <p>
                                The fundamental courses you need to build games.
                            </p>
                        </div>
                    </div>
                    <div className="border border-gray-100 transition-colors duration-200 ease-in-out overflow-hidden rounded-lg bg-blue-700/20 relative ">
                        <div className="h-[196px] relative">
                            <Link
                                className="relative w-full h-full inline-block"
                                href="/p/front-end"
                            >
                                <Image
                                    layout="fill"
                                    alt="Front-end Development"
                                    fetchPriority="high"
                                    decoding="async"
                                    className="object-cover absolute h-full w-full inset-0 bg-transparent text-transparent"
                                    src="http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/front-end.svg"
                                />
                            </Link>
                        </div>
                        <div className="p-6">
                            <Link
                                className="font-semibold no-underline hover:underline"
                                href="/p/front-end"
                            >
                                <h2 className="text-xl mb-0">
                                    Data Analysis and AI
                                </h2>
                            </Link>
                            <p>
                                The intersection of data analysis and AI is
                                where the real magic happens. using AI to
                                analyze large and complex datasets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default page;
