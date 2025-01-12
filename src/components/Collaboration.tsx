"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import CheckedIcon from "@/assets/checked.svg";
import Image from "next/image";
import { motion } from "framer-motion";

// import curve1 from "@/assets/collaboration/curve-1.svg";
// import CurveIcon1 from "@/assets/collaboration/curve-1.svg";
// import curve2 from "@/assets/collaboration/curve-2.svg";
import figma from "@/assets/collaboration/figma.png";
import framer from "@/assets/collaboration/framer.png";
import notion from "@/assets/collaboration/notion.png";
import discord from "@/assets/collaboration/discord.png";
import slack from "@/assets/collaboration/slack.png";
import photoshop from "@/assets/collaboration/photoshop.png";
import protopie from "@/assets/collaboration/protopie.png";
import raindrop from "@/assets/collaboration/raindrop.png";

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

//  const RightCurve = () => {
//   return (
//     <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
//       <Image src={curve2} width={162} height={76} alt="Curve 2" />
//     </div>
//   );
// };

//  const LeftCurve = () => {
//   return (
//     <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
//       {/* <Image
//         src={curve1}
//         width={522}
//         height={182}
//         // className="bg-red-600"
//         alt="Curve 1"
//       /> */}
//       <CurveIcon1 className="text-red-600 bg-black" />
//     </div>
//   );
// };

const Collaboration = () => {
  return (
    <section className="my-[3rem]">
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
                    <CheckedIcon className="w-6 h-6" />
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

        <div className="lg:ml-auto lg:w-[38rem] mt-4">
          <p className="body-2 mb-4 font-medium text-neutral-600 md:mb-16 lg:mb-16 lg:w-[22rem] lg:mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sint consectetur
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-black/60 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-black/60 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-[#0E0C15] rounded-full">
                  <Image
                    src="https://www.6dg.co.uk/wp-content/uploads/2023/08/3c9133b6e7684aeda1f1ec7dbc998d20-1.webp"
                    width={60}
                    height={60}
                    className="w-auto h-auto"
                    alt="logo"
                  />
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

            {/* <LeftCurve /> */}
            {/* <RightCurve /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
