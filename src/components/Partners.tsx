"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

// import React, { ReactElement } from "react";
import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

import {
  Amazon,
  Fortnite,
  GCloud,
  Lacoste,
  Microsoft,
  Motul,
  Yanbal,
} from "@/utils/icons";
import { Handshake, House, PhoneCall, PlaneTakeoff } from "lucide-react";

const Partners = () => {
  const processData = [
    {
      id: 1,
      step: "PHASE I",
      title: "Assessment & Consultation",
      color: "from-blue-600",
      icon: <Handshake className="text-yellow-400 w-8 h-8" />,
      desc: "We conduct a thorough evaluation of your current IT infrastructure and needs. Based on this, we recommend a tailored strategy for improvement.",
    },
    {
      id: 2,
      step: "PHASE II",
      color: "from-gray-600",
      icon: <PlaneTakeoff className="text-yellow-400 w-8 h-8" />,
      title: "Solution Design & Implementation",
      desc: "Once approved, we design, configure, and deploy the required solutions, ensuring minimal disruption to your business operations",
    },
    {
      id: 3,
      step: "PHASE III",
      color: "from-green-600",
      icon: <PhoneCall className="text-yellow-400 w-8 h-8" />,
      title: "Ongoing Support & Optimization",
      desc: "Ensure continuous monitoring, maintenance, and optimization to keep your systems running smoothly. We’re always available for any issues or upgrades",
    },
    {
      id: 4,
      step: "PHASE IV",
      color: "from-red-600",
      icon: <House className="text-yellow-400 w-8 h-8" />,
      title: "Continuous Innovation",
      desc: "As technology evolves, so do we. We provide regular updates, new solutions, and proactive recommendations to ensure your business stays competitive and secure",
    },
  ];
  const [isActive, setIsActive] = useState<number>();
  return (
    <section className="bg-white py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            {/*
             */}
            <div className="tag">Our Process</div>
            <h2 className="section-title">How We Do It</h2>

            <p className="section-desc">
              Simplify the process from beginning to end, and create a robust
              infrastructure to support you all the way
            </p>
          </div>
        </div>
        <div className="relative my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {processData?.map((item) => (
              <div
                key={item?.id}
                onMouseOver={() => setIsActive(item?.id)}
                onMouseLeave={() => setIsActive(20)}
                className={`relative bg-gradient-to-r ${item?.color} to-[#f9f9f9] cursor-pointer flex h-[250px] border border-gray-200 shadow-xl items-center justify-center rounded-xl p-4`}
              >
                {/* <span className="text-3xl absolute -top-2 -left-1">+</span> */}
                <div className="flex w-full h-full items-center justify-center">
                  {isActive !== item?.id ? (
                    <span className="border border-gray-300 rounded-md p-2 title text-xl text-white">
                      {" "}
                      {item?.step}
                    </span>
                  ) : (
                    <div className="flex items-center flex-col w-full h-full justify-between text-white">
                      <div className="">
                        {item?.icon}
                        {/* <Handshake className="text-yellow-400 w-8 h-8" /> */}
                        <span className="text-base">{item?.title}</span>
                      </div>
                      <span className="text-sm">{item?.desc}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container lg:flex"></div>
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
              <Fortnite className="w-full h-5" />
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
              <Motul className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <GCloud className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Lacoste className="w-full h-5" />
            </div>
            <div className="p-5 shadow-xl rounded-lg w-auto max-w-[150px] hover:bg-white cursor-pointer">
              <Yanbal className="w-full h-5" />
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
