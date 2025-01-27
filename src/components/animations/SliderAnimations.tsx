"use client";
import React from "react";
import dynamic from "next/dynamic";
import animationData1 from "@/assets/animations/animation1.json";
// import animationData2 from "@/assets/animations/animation2.json";
// import animationData3 from "@/assets/animations/animation3.json";
// import animationData4 from "@/assets/seal.json";
// import animationData5 from "@/assets/animations/application.json";
// import animationData6 from "@/assets/animations/padlock.json";
// import animationData7 from "@/assets/animations/AddProperty.json";
// import animationData8 from "@/assets/animations/application2.json";

const Lottie = dynamic(() => import("react-lottie"), {
  ssr: false,
});

const SliderAnimation1 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={200} width={200} />;
};
export default SliderAnimation1;

// export const SliderAnimation2 = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData2,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return <Lottie options={defaultOptions} height={200} width={200} />;
// };

// export const SliderAnimation3 = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData3,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return <Lottie options={defaultOptions} height={200} width={200} />;
// };

// export const SliderAnimation4 = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData4,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return <Lottie options={defaultOptions} height={200} width={200} />;
// };

// export const SliderAnimation5 = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData5,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return <Lottie options={defaultOptions} height={200} width={200} />;
// };

// export const SliderAnimation6 = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData6,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return <Lottie options={defaultOptions} height={200} width={200} />;
// };

// export const SliderAnimation7 = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData7,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return <Lottie options={defaultOptions} height={200} width={200} />;
// };

// export const SliderAnimation8 = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData8,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };
//   return <Lottie options={defaultOptions} height={200} width={200} />;
// };
