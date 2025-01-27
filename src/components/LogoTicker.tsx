"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "@/assets/logo-acme.png";
// import quantumLogo from "@/assets/logo-quantum.png";
// import apexLogo from "@/assets/logo-apex.png";
// import pulseLogo from "@/assets/logo-pulse.png";
// import celestialLogo from "@/assets/logo-celestial.png";
// import echoLogo from "@/assets/logo-echo.png";
import {
  Amazon,
  Fortnite,
  Lacoste,
  Microsoft,
  Motul,
  Yanbal,
} from "@/utils/icons";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="py-2 mb-8 text-black/60 font-bold text-center">
          Trusted by our Esteemed Partners
        </div>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 pr-14 flex-none"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Microsoft className="logo-ticker-image" />
            <Amazon className="logo-ticker-image" />
            <Yanbal className="logo-ticker-image" />
            {/* <Dell className="logo-ticker-image" /> */}
            <Motul className="logo-ticker-image" />
            <Fortnite className="logo-ticker-image" />
            <Lacoste className="logo-ticker-image" />

            <Image
              src={acmeLogo}
              alt="acmeLogo"
              className="logo-ticker-image"
            />
            {/*
            <Image
              src={echoLogo}
              alt="echoLogo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apexLogo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="quantumLogo"
              className="logo-ticker-image"
            /> */}
            {/* second  set of logos*/}

            <Microsoft className="logo-ticker-image" />
            <Amazon className="logo-ticker-image" />
            <Yanbal className="logo-ticker-image" />
            {/* <Dell className="logo-ticker-image" /> */}
            <Motul className="logo-ticker-image" />
            <Fortnite className="logo-ticker-image" />
            <Lacoste className="logo-ticker-image" />
            <Image
              src={acmeLogo}
              alt="acmeLogo"
              className="logo-ticker-image"
            />
            {/* <Image
              src={echoLogo}
              alt="echoLogo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestialLogo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apexLogo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="quantumLogo"
              className="logo-ticker-image"
            /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default LogoTicker;
