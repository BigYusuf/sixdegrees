"use client";

// import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
// import { motion, useScroll, useTransform } from "framer-motion";

import ArrowRight from "@/assets/arrow-right.svg";
// import cogImage from "@/assets/cog.png";
// import cylinderImage from "@/assets/cylinder.png";
// import noodleImage from "@/assets/noodle.png";

// import * as animationData from '@/assets/building.json'
import animationData from "@/assets/building.json";
// import shieldData from "@/assets/shield.json";
// import lockData from "@/assets/P4s4UEnTrH.json";

const Hero = () => {
  const heroRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start end", "end start"],
  // });
  // const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // const shieldOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: shieldData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const lockOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: lockData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_90%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Six degrees</div>
            <h1 className="title text-5xl md:text-7xl">
              Secure Cloud Solutions
            </h1>
            <p className="desc">
              We empower UK organizations to thrive in the cloud with secure
              platforms for innovation and growth.
            </p>
            <div className="flex items-center gap-1 mt-[30px]">
              <button className="btn btn-primary">Start Now</button>
              <button className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            {/* <motion.img
              src={cogImage.src}
              alt="cog image"
              className="md:absolute md:w-auto md:h-full md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut",
              }}
                
            /> */}
            <motion.div
              className="md:absolute md:w-auto md:h-full md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 5,
                ease: "easeInOut",
              }}
            >
              <Lottie
                options={defaultOptions}
                height={
                  width > 760 ? 600 : width <= 760 && width > 450 ? 450 : 450
                }
                width={
                  width > 760 ? 600 : width <= 760 && width > 450 ? 400 : 300
                }
              />
            </motion.div>
            {/* <motion.div
              style={{ translateY: translateY }}
              className="hidden md:block md:absolute -top-8 -left-32"
            >
              <Lottie options={lockOptions} height={220} width={220} />
            </motion.div> */}

            {/* <motion.img
              src={cylinderImage.src}
              alt="cylinder image"
              width={220}
              height={220}
              style={{ translateY: translateY }}
              className="hidden md:block md:absolute -top-8 -left-32"
            /> */}
            {/* <motion.img
              src={noodleImage.src}
              alt="noodle image"
              style={{ translateY: translateY, rotate: 30 }}
              width={220}
              height={220}
              className="hidden lg:block md:absolute top-[524px] left-[448px] rotate-[30deg]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
