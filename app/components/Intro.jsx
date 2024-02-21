import React from "react";
import selam from "@/public/tenor.gif";
const Intro = () => {
  return (
    <section class="flex flex-col mb-10 my-5">
      <header class="my-12 mb-6 text-center">
        <p class="font-medium my-4 text-violet-500 dark:text-violet-75 text-sm tracking-widest uppercase">
          Hello,
        </p>
        <h2 class="text-3xl">I'm Yared Kebede.</h2>
      </header>
      <div class="flex flex-col items-center">
        <p class="mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">
          Are you feeling stuck or overwhelmed in your coding journey? Don't
          worry, I've got your back! Together, we'll work to level up your
          skills, increase your earning potential, and build a brighter future.
        </p>
        <div class="max-w-[725px] mx-auto w-full">
          <video
            poster={selam}
            class="max-w-[725px] mx-auto w-full"
            controls
            src="https://res.cloudinary.com/dlomcic7f/video/upload/v1708350869/full/Selam_Food_Delivery_Website_wnuvbx.mp4"
            __idm_id__="24577"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Intro;
