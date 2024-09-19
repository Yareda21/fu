import React from "react";
import selam from "@/public/tenor.gif";
const Intro = () => {
    return (
        <section className="flex flex-col  mb-10 my-5">
            <header className="my-12 mb-6 text-center">
                <p className="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">
                    Hello,
                </p>
                <h2 className="text-3xl">I'm Yared Kebede.</h2>
            </header>
            <div className="flex flex-col items-center">
                <p className="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
                    Are you feeling stuck or overwhelmed in your coding journey?
                    Don't worry, I've got your back! Together, we'll work to
                    level up your skills, increase your earning potential, and
                    build a brighter future.
                </p>
                <div className="max-w-[725px] mx-auto w-full">
                    <video
                        poster="https://res.cloudinary.com/dlomcic7f/image/upload/v1708515495/full/me_x0qfek.jpg"
                        className="max-w-[725px] mx-auto w-full"
                        controls
                        src="https://res.cloudinary.com/dlomcic7f/video/upload/v1708350869/full/Selam_Food_Delivery_Website_wnuvbx.mp4"
                    ></video>
                </div>
            </div>
        </section>
    );
};

export default Intro;
