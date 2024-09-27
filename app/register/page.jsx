"use client";
import React, { useState } from "react";
import poster from "@/public/poster.jpg";
import Image from "next/image";

import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const page = ({ searchParams }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const addText = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "reg_student"), {
                name: name,
                subject: searchParams.title,
                phone: phone,
                registrationDate: new Date(),
            });
            console.log(name, searchParams.title, phone);
            setName("");
            setPhone("");
            alert("Registration Successful");
        } catch (e) {
            console.log(e);
            alert("Registration Failed");
        }
    };

    return (
        <section className="bg-white ">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="hidden lg:relative lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    {/* <Image
                        alt="Night"
                        src={poster}
                        className="absolute inset-0 h-full w-full opacity-100"
                    /> */}
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/VoRz7xfF9m0"
                        title="Final Intro"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    ></iframe>
                </section>

                <main className="flex items-center bg-slate-800 text-white justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="text-center text-amber-500 text-2xl">
                            Registeration <br />{" "}
                            {searchParams && searchParams.title}
                        </h1>
                        <form
                            method="post"
                            className="mt-8 grid grid-cols-6 gap-6"
                            onSubmit={addText}
                        >
                            {/* first name */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="FirstName"
                                    className="block text-sm font-medium text-white"
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="FirstName"
                                    name="first_name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            {/* last name  */}
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                    htmlFor="Subject"
                                    className="block text-sm font-medium text-white"
                                >
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                    value={searchParams.title || ""}
                                    onChange={(e) => setName(e.target.value)}
                                    readOnly
                                />
                            </div>
                            {/* email */}
                            <div className="col-span-6">
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-white"
                                >
                                    {" "}
                                    Phone Number{" "}
                                </label>

                                <input
                                    type="tel"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name="phone"
                                    className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="MarketingAccept"
                                    className="flex gap-4"
                                >
                                    <input
                                        type="checkbox"
                                        id="MarketingAccept"
                                        name="marketing_accept"
                                        className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        defaultChecked
                                    />

                                    <span className="text-sm text-white">
                                        Please Call and Remind Me at +251 922 76
                                        15 94
                                    </span>
                                </label>
                            </div>
                            {/* terms of use */}
                            <div className="col-span-6">
                                <p className="text-sm text-white">
                                    By creating an account, you agree to our
                                    <a
                                        href="#"
                                        className="text-white underline"
                                    >
                                        {" "}
                                        terms and conditions{" "}
                                    </a>
                                    and
                                    <a
                                        href="#"
                                        className="text-white underline"
                                    >
                                        privacy policy
                                    </a>
                                    .
                                </p>
                            </div>
                            {/* create account button  */}
                            <div className="flex-col col-span-6 items-center gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    // onClick={addText}
                                >
                                    Register For Class
                                </button>

                                <ul className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    <li>
                                        Go to head office in Megenagna Metebaber
                                        Building for class Schedule
                                    </li>
                                    <li>
                                        Classes will be arranged with your
                                        specific Instructor
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};

export default page;
