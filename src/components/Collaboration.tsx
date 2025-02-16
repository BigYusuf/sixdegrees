"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

// import React, { ReactElement } from "react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CircleCheck, CloudLightning } from "lucide-react";

import figma from "@/assets/collaboration/figma.png";
import framer from "@/assets/collaboration/framer.png";
import notion from "@/assets/collaboration/notion.png";
import discord from "@/assets/collaboration/discord.png";
import slack from "@/assets/collaboration/slack.png";
import photoshop from "@/assets/collaboration/photoshop.png";
import protopie from "@/assets/collaboration/protopie.png";
import raindrop from "@/assets/collaboration/raindrop.png";
import { Curve1, Curve2 } from "@/utils/icons";
import LogoText from "./LogoText";
// import Link from "next/link";
// import { ChevronRight, CloudCog, Cloudy, Database } from "lucide-react";

const collabApps = [
  {
    id: 0,
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
    pos: 0,
  },
  {
    id: 1,
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
    pos: 45,
  },
  {
    id: 2,
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
    pos: 90,
  },
  {
    id: 3,
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
    pos: 135,
  },
  {
    id: 4,
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
    pos: 180,
  },
  {
    id: 5,
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
    pos: 225,
  },
  {
    id: 6,
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
    pos: 270,
  },
  {
    id: 7,
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
    pos: 315,
  },
];

const collabContent = [
  {
    id: 1,
    title: "Seamless Integration",
    desc: "With easy integration and top-notch security, it's the perfect solution for teams looking to work smarter.",
  },
  { id: 2, title: "Smart Automation", desc: "" },
  { id: 3, title: "Top-notch Security", desc: "" },
];
const collabContent1 = [
  {
    id: 1,
    title: "Modernized and Custom",
  },
  { id: 2, title: "Proven Expertise", desc: "" },
  { id: 3, title: "24/7 Support", desc: "" },
];
const collabContent2 = [
  {
    id: 1,
    title: "Scalability",desc:""
    // desc: "Our services scale with your business growth, offering flexibility and future-proof solutions.",
  },
  {
    id: 2,
    title: "Cost-Efficiency",
    // desc: "Optimize your IT budget with a combination of on-demand, managed, and hybrid services.",
  },
  {
    id: 3,
    title: "Proactively defend and respond",
    // desc: "Protect your data, assets, and infrastructure from evolving cyber threats.",
  },
];
// Gain insight
// Direct Your Business
// Proactively defend and respond

const CollabAnimation1 = dynamic(
  () => import("./animations/CollabAnimation1"),
  {
    ssr: false,
  }
);
const CollabAnimation2 = dynamic(
  () => import("./animations/CollabAnimation2"),
  {
    ssr: false,
  }
);

const Collaboration = () => {
  return (
    <section className="my-[3rem] overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="tag">Why we are the best</div>
            <div className="flex items-center justify-center gap-2">
              <h2 className="section-title">Why Choose HybriD </h2>{" "}
              <CloudLightning className="text-yellow-400 w-8 h-8 lg:w-16 lg:h-16 " />
            </div>
            {/* <p className="section-desc">
              Transforming complex cloud solutions into simple ones. we focus on
              making cloud technology more accessible and user-friendly.
            </p> */}

            <p className="section-desc">
              Every business is unique. Let&apos;s work to design and implement
              custom IT solutions that match their specific needs and goals.
            </p>
          </div>
        </div>
        <div className="relative mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "></div>
        </div>
      </div>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="title text-xl md:text-3xl mb-4 md:mb-8">
            Tailored and Optimized Cloud Solutions
          </h2>
          <p className="body-2 my-3 text-neutral-500">
            Our team works closely with you to design and implement custom IT
            solutions that match their specific needs and goals.
          </p>
          {/* <p className="body-2 my-3 text-neutral-500">
            Gain confidence in your cloud direction and achieve accelerated time
            to value through our assured and optimised cloud services.
          </p> */}
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent1?.map(
              (item: { id: number; title: string; desc?: string }) => (
                <li className="mb-3 py-3" key={item?.id}>
                  <div className="flex items-center">
                    <CircleCheck className="w-6 h-6 rounded-full text-blue-500" />
                    <h6 className="body-2 ml-5 font-medium">{item?.title}</h6>
                  </div>
                  {item?.desc !== "" && (
                    <p className="body-2 mt-3 text-neutral-500">{item?.desc}</p>
                  )}
                </li>
              )
            )}
          </ul>
          <button className="btn btn-primary">Get started</button>
        </div>

        <div className="lg:ml-auto lg:w-[38rem] mt-8 md:mt-4">
          {/* <p className="body-2 mb-10 font-medium text-neutral-600 md:mb-16 lg:mb-16 lg:w-[22rem] lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sint consectetur
          </p> */}

          {/* <div className="relative items-center justify-center left-1/2 flex w-[22rem] aspect-square border border-black/60 rounded-full -translate-x-1/2 scale:75 md:scale-100"> */}
          <CollabAnimation1 />
          {/* </div> */}
        </div>
      </div>
      <div className="container my-10 lg:my-20 lg:flex">
        <div className="lg:mx-auto lg:w-1/2 mt-8 md:mt-4">
          <CollabAnimation2 />
        </div>
        <div className=" lg:w-1/2">
          <h2 className="title text-xl md:text-3xl mb-4 md:mb-8">
            Unbreakable & Scalable Security
          </h2>
          {/* <p className="body-2 my-3 text-neutral-500">
            Master today’s complex threat landscape and protect your business
            with our intelligence-led security services.
          </p> */}
          <p className="body-2 my-3 text-neutral-500">
            Security is at the heart of everything we do. We protect your data,
            assets, and infrastructure from evolving cyber threats.
          </p>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent2?.map(
              (item: { id: number; title: string; desc?: string }) => (
                <li className="mb-3 py-3" key={item?.id}>
                  <div className="flex items-center">
                    <CircleCheck className="w-6 h-6 rounded-full text-blue-500" />
                    <h6 className="body-2 ml-5 font-medium">{item?.title}</h6>
                  </div>
                  {item?.desc !== "" && (
                    <p className="body-2 mt-3 text-neutral-500">{item?.desc}</p>
                  )}
                </li>
              )
            )}
          </ul>
          <button className="btn btn-primary">Get started</button>
        </div>
      </div>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="title text-xl md:text-3xl mb-4 md:mb-8">
            Cloud Solution for seamless Collaboration
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent?.map(
              (item: { id: number; title: string; desc?: string }) => (
                <li className="mb-3 py-3" key={item?.id}>
                  <div className="flex items-center">
                    <CircleCheck className="w-6 h-6 rounded-full text-blue-500" />
                    <h6 className="body-2 ml-5 font-medium">{item?.title}</h6>
                  </div>
                  {item?.desc !== "" && (
                    <p className="body-2 mt-3 text-neutral-500">{item?.desc}</p>
                  )}
                </li>
              )
            )}
          </ul>
          <button className="btn btn-primary">Get started</button>
        </div>

        <div className="lg:ml-auto lg:w-[38rem] mt-8 md:mt-4">
          <p className="body-2 mb-10 font-medium text-neutral-600 md:mb-16 lg:mb-16 lg:w-[22rem] lg:mx-auto">
            As technology evolves, so do we. We provide regular updates, new
            solutions, and proactive recommendations to ensure your business
            stays competitive and secure.
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-black/60 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-black/60 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-[#0E0C15] rounded-full">
                  {/* <Image
                    src="https://www.6dg.co.uk/wp-content/uploads/2023/08/3c9133b6e7684aeda1f1ec7dbc998d20-1.webp"
                    width={60}
                    height={60}
                    className="w-auto h-auto"
                    alt="logo"
                  /> */}
                  <LogoText />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map(
                (app: {
                  id: number;
                  title: string;
                  icon: any;
                  width: number;
                  height: number;
                  pos: number;
                }) => (
                  <motion.li
                    key={app?.id}
                    animate={{
                      rotate: app?.pos,
                    }}
                    initial={{ x: 0, y: 0 }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                    }}
                    className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${app?.pos}`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#e2e1ea] border border-n-1/15 rounded-xl -rotate-${app?.pos}`}
                    >
                      <Image
                        className="m-auto"
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </motion.li>
                )
              )}
            </ul>

            <Curve1 className="hidden absolute top-1/2 right-full w-[22.625rem] -mt-1 mr-10 pointer-events-none lg:block" />
            <Curve2 className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
