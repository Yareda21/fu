"use client";
import React, { useState } from "react";
import poster from "@/public/poster.jpg";
import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const page = ({ searchParams }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <section className="bg-white ">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="hidden lg:relative lg:flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Night"
            src={poster}
            className="absolute inset-0 h-full w-full opacity-100"
          />
        </section>

        <main className="flex items-center bg-slate-800 text-white justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-center text-amber-500 text-2xl">
              Registeration <br /> {searchParams && searchParams.title}
            </h1>
            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
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
                  id="LastName"
                  name="last_name"
                  className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                  value={searchParams.title}
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
                  name="phone"
                  className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              {/* password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-white"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              {/* password confirm */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-white"
                >
                  Password Confirmation
                </label>

                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-1 px-3 py-2 w-full rounded-md border-gray bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>
              {/* checkbox */}
              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    checked
                  />

                  <span className="text-sm text-white">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>
              {/* terms of use */}
              <div className="col-span-6">
                <p className="text-sm text-white">
                  By creating an account, you agree to our
                  <a href="#" className="text-white underline">
                    {" "}
                    terms and conditions{" "}
                  </a>
                  and
                  <a href="#" className="text-white underline">
                    privacy policy
                  </a>
                  .
                </p>
              </div>
              {/* create account button  */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                  Create an account
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?{" "}
                  <a href="/signup" className="text-gray-300 underline">
                    {" "}
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
            {/* <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            
            <div className="w-full">
              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                
                <SiGmail className="mx-2" /> <span> Continue with Gmail</span>
              </a>
            </div>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>
            <div className="w-full">
              <input
                type="tel"
                label="Phone"
                className="mb-6 text-black p-3 w-full"
                size="lg"
                placeholder="Enter your Phone Number"
              />

              <a
                className="mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                
                <FaPhoneAlt className="mx-2" />
                Continue with Phone Number
              </a>
            </div> */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default page;
