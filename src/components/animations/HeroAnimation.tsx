"use client";
import React, { useEffect, useState } from "react";
// import Lottie from "react-lottie";
import dynamic from "next/dynamic";
import animationData from "@/assets/building.json";

const Lottie = dynamic(() => import("react-lottie"), {
    ssr: false,
  });
const HeroAnimation = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Lottie
      options={defaultOptions}
      height={width > 760 ? 600 : width <= 760 && width > 450 ? 450 : 450}
      width={width > 760 ? 600 : width <= 760 && width > 450 ? 400 : 300}
    />
  );
};

export default HeroAnimation;
