"use client";
import React from "react";
// import Lottie from "react-lottie";
import dynamic from "next/dynamic";
import animationData from "@/assets/shield.json";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});
const CallAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={220} width={220} />;
};

export default CallAnimation;
