"use client";

// import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
// import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

// import ArrowRight from "@/assets/arrow-right.svg";
// import cogImage from "@/assets/cog.png";
// import cylinderImage from "@/assets/cylinder.png";
// import noodleImage from "@/assets/noodle.png";

const LottieAnimation = dynamic(() => import("./animations/HeroAnimation"), {
  ssr: false,
});
const Hero = () => {
  const heroRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start end", "end start"],
  // });
  // const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  

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
                {/* <ArrowRight className="h-5 w-5" /> */}
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
              <LottieAnimation />
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
