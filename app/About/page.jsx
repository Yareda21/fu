import React from "react";
import class1 from "@/public/class1.jpg";
import tila from "@/public/tila.jpg";
import faye from "@/public/faye.jpg";
import yar from "@/public/me.jpg";
import Image from "next/image";

const About1 = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col justify-between gap-8">
        <div className="w-full ml-4 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-amber-400 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 w-[70%]">
            <span className="text-amber-400 ">Passion </span> <br />
            We are truly dedicated in the business of empowering people. Our
            trainers should be renowned for their beneficial training
            programmers and we ensure that the quality and reputation of our
            organization is constantly upheld.
            <br />
            <span className="text-amber-400">Respect </span> <br />
            We are known to our students as courteous, modest and always willing
            to tread the extra mile to produce a win-win liaison.
            <br />
            <span className="text-amber-400">Innovation </span> <br />
            Our training programmers are constantly updated to ensure that the
            content fits the current need of our students.
            <br />
            <span className="text-amber-400">Determination </span> <br />
            We work with only the best instructors who can fill students' skill
            gap. They are always inspire and sharpen students skill-sets and
            broaden their horizons through new knowledge and fortitude.
            <br />
            <span className="text-amber-400">Enthusiasm </span> <br />
            All our training programs encompass a successful formula; Knowledge
            + Hands-On + Fun With highly sophisticated facilities.
          </p>
        </div>
        <div className="mx-auto w-full lg:w-8/12 ">
          <Image
            className="w-full h-full"
            src={class1}
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-amber-400 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-white ">
            Since 2006 E.C, Our Management were busy creating multiple colleges
            around Addis Ababa. Envisioning better work enviroment and happy
            place for students exceed will welcome you to our special and well
            prepared Software Engineering Programs.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex  justify-center flex-col items-center">
              <Image className="md:block hidden" src={tila} alt="" />
              <Image className="md:hidden block" src={tila} alt="" />
              <p className="font-medium text-lg leading-5 text-amber-400 mt-4">
                Tilahun Kebede (Dr.) <br />
                <span>General Manager</span>
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image className="md:block hidden" src={faye} alt="" />
              <Image className="md:hidden block" src={faye} alt="" />
              <p className="font-medium text-lg leading-5 text-amber-400 mt-4">
                Prof. Fantahun W/Senbet <br />
                <span>Academy Consultant </span>
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image className="md:block hidden" src={yar} alt="Yared Kebede" />
              <Image className="md:hidden block" src={yar} alt="Yared Kebede" />
              <p className="font-medium text-lg leading-5 text-amber-400 mt-4">
                Yared Kebede <br />
                Chief Technology Officer
              </p>
            </div>
            {/* <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <Image
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured Image"
              />
              <Image
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
