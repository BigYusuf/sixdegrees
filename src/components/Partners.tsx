"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

// import React, { ReactElement } from "react";
import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

import { Amazon, GCloud, Microsoft } from "@/utils/icons";

const Partners = () => {
  return (
    <section className="my-[3rem] overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            {/* <div className="tag">Why we are the best</div>
            <h2 className="section-title">How We Do It</h2>

            <p className="section-desc">
              Transforming complex cloud solutions into simple ones. we focus on
              making cloud technology more accessible and user-friendly.
            </p> */}
          </div>
        </div>
        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "></div>
        </div>
      </div>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="title text-xl md:text-3xl mb-4 md:mb-8">
            Collaborating with industry leaders to deliver exceptional,
            round-the-clock service and unparalleled quality.
          </h2>
          <p className="body-2 my-3 text-neutral-500">
            Gain confidence in your cloud direction and achieve accelerated time
            to value through our assured and optimised cloud services.
          </p>
          <ul className="max-w-[22rem] mb-10 md:mb-14"></ul>
          <button className="btn btn-primary">Learn more</button>
        </div>

        <div className="lg:ml-auto lg:w-[38rem] mt-8 md:mt-4 flex flex-col gap-4 items-end justify-end">
          <div className="flex items-end gap-4 justify-end">
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Microsoft className="w-full h-5" />
            </div>
        
        
          </div>
          <div className="flex items-end gap-4 justify-end">
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Microsoft className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <GCloud className="w-full h-5" />
            </div>
        
          </div>
          <div className="flex items-end gap-4 justify-end">
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Microsoft className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <GCloud className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Amazon className="w-full h-5" />
            </div>
          </div>

          <div className="flex items-end gap-4 justify-end">
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Microsoft className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <GCloud className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Amazon className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Amazon className="w-full h-5" />
            </div>
          </div>

          {/* <p className="body-2 mb-10 font-medium text-neutral-600 md:mb-16 lg:mb-16 lg:w-[22rem] lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sint consectetur
          </p> */}

          {/* <div className="relative items-center justify-center left-1/2 flex w-[22rem] aspect-square border border-black/60 rounded-full -translate-x-1/2 scale:75 md:scale-100"> */}
          {/* <CollabAnimation1 /> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Partners;
