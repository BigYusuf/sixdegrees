"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import animationData from "@/assets/animations/animation1.json";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});
const CollabAnimation2 = () => {
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
      height={width > 760 ? 450 : width <= 760 && width > 450 ? 300 : 220}
      width={width > 760 ? 450 : width <= 760 && width > 450 ? 300 : 220}
    />
  );
};

export default CollabAnimation2;
