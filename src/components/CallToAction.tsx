"use client";
// import Image from "next/image";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Lottie from "react-lottie";
// import Lottie from "lottie-react";
import dynamic from "next/dynamic";
// import { ArrowRight } from "@/utils/icons";

const LottieAnimation = dynamic(() => import("./animations/CallAnimation"), {
  ssr: false,
});

// import starImage from "@/assets/star.png";
// import springImage from "@/assets/spring.png";

const CallToAction = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-desc">
            Take the next step toward seamless cloud integration. Let’s make
            your cloud journey a success!
          </p>

          <motion.div
            style={{ translateY: translateY }}
            className="hidden md:block md:absolute w-[220px] h-[220px] -top-8 -left-32"
          >
            <LottieAnimation />
          </motion.div>

          {/* <Image
            src={starImage}
            alt={"starImage"}
            className="absolute -left-[350px] -top-[137px]"
            width={360}
            height={360}
          /> */}
          {/* <Image
            src={springImage}
            alt={"springImage"}
            className="absolute -right-[331px] -top-[19px]"
            width={360}
            height={360}
          /> */}
        </div>
        <div className="flex gap-2 mt-10 justify-center items-center">
          <button className="btn btn-primary">Get Started</button>
          {/* <button className="btn btn-text gap-1">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button> */}
        </div>
      </div>
    </section>
  );
};
export default CallToAction;
