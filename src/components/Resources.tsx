/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  ChevronRight,
  MoveLeft,
  MoveRight,
  // CloudCog,
  // Cloudy,
  // Database,
  // Map,
  // Server,
  // Smartphone,
  // Zap,
} from "lucide-react";
// import dynamic from "next/dynamic";
// import Image from "next/image";
import Link from "next/link";
import { Key, useRef, useState } from "react";
// import Slider from "react-slick";

// import { ReactElement } from "react";

// import Image from "next/image";

// import productImage from "@/assets/product-image.png";
// import pyramidImage from "@/assets/pyramid.png";
// import tubeImage from "@/assets/tube.png";

const Resources = () => {
  // const Slider1 = dynamic(() => import("./animations/SliderAnimations"), {
  //   ssr: false,
  // });
  const CardItem = ({
    link,
    // img,
    title,
    desc,
    linkName,
  }: // active,
  {
    link: string;
    // img?: any;
    // active?: boolean;
    title: string;
    desc: string;
    linkName?: string;
  }) => {
    return (
      <div
        className={`hover:card-wrapper border border-[#ccc] flex rounded-3xl min-w-[300px] md:min-w-[320px] min-h-[280px] cursor-pointer backdrop-filter backdrop-blur-sm shadow-lg`}
      >
        <div className="p-4 md:p-8 hover:card-content">
          <div className="flex h-full flex-col gap-2">
            <div className="flex items-start flex-col mb-3 gap-2">
              <div className="w-full h-[250px] md:mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                {/* <Image src ={img} alt ="text"/> */}
                {/* <Slider1 /> */}
              </div>
              <h2 className="text-black text-lg font-medium">{title}</h2>
            </div>
            <div className="flex flex-col justify-between flex-grow gap-2">
              <p className="leading-relaxed text-xs text-black/60">{desc}</p>
              <Link
                href={link}
                className="mt-3 text-black hover:text-blue-600 inline-flex items-center"
              >
                <span className="text-sm">
                  {linkName ? linkName : "Documentation"}
                </span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const slideData = [
    {
      id: 1,
      link: "/public_cloud",
      class: 0,
      title: "Benefits of Public Cloud",
      linkName: "Learn more",
      desc: "Streamline your cloud experience and maximise your cloud investment with Microsoft Azure-aligned public cloud services.",
    },
    {
      id: 2,
      link: "/hybrid_cloud",
      class: 0,
      title: "Hybrid Cloud",
      linkName: "Learn more",
      desc: "Host all of your workloads in the most appropriate location while experiencing the simplicity of one cloud from Six Degrees.",
    },
    {
      id: 3,
      link: "/public_cloud",
      class: 0,
      title: "King of Cyber Security",
      linkName: "Learn more",
      desc: "Enhance your cyber security and safeguard your organisation with our cyber security strategy and advisory, consultancy, and managed services.",
    },
    {
      id: 4,
      link: "/agile",
      title: "How to Integrate Our Cloud",
      class: 1,
      linkName: "Watch",
      desc: "Secure your productivity on any device, anywhere, any time.",
    },
    {
      id: 5,
      link: "/location",
      title: "How to Integrate Our Cloud",
      class: 3,
      linkName: "View",
      desc: "Streamline your hosting with comprehensive colocation services delivered from three UK data centres.",
    },
    {
      id: 6,
      link: "/mobile",
      linkName: "View",
      title: "How to go Serverless",
      class: 3,
      desc: "Gain clarity and control of your 5G estate, ensuring ongoing cost efficiencies are managed on your behalf through our managed service.",
    },
    {
      id: 7,
      link: "/connect",
      title: "Connectivity",
      class: 2,
      desc: "Connect your business through a comprehensive connectivity portfolio delivered via our owned and operated core Next Generation Network (NGN).",
    },
  ];

  const ArrowsSlider = ({
    prevSlide,
    nextSlide,
  }: {
    prevSlide: () => void;
    nextSlide: () => void;
  }) => {
    return (
      <div className="w-full h-full ">
        <div
          className="absolute -left-4 top-[50%] rounded-full flex items-center justify-center cursor-pointer bg-blue-400 hover:bg-white w-10 h-10 text-white hover:text-black/60"
          onClick={prevSlide}
        >
          <MoveLeft className="w-5 h-5" />
        </div>
        <div
          className="absolute -right-4 top-[50%] rounded-full flex items-center justify-center cursor-pointer bg-blue-400 hover:bg-white w-10 h-10 text-white hover:text-black/60"
          onClick={nextSlide}
        >
          <MoveRight className="w-5 h-5" />
        </div>
      </div>
    );
  };

  const [startX, setStartX] = useState<number>(0);
  const [mouseDown, setIsMouseDown] = useState<boolean>(false);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetRef = useRef<any>(null);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const len = slideData?.length - 1;
  //get card width
  // const box: any = document.querySelector(".resource__slider");
  // const firstCardWidth: any = box.querySelector(".cards").offsetWidth;

  // console.log("dimensions", dimensions);
  // console.log("resource__slider", box.scrollLeft);
  // console.log("resource__slider", targetRef.current);
  // const width: number | undefined = box?.clientWidth;
  // console.log("width", width);
  const btnPressPrev = () => {
    targetRef.current.scrollLeft -= 100;
    console.log("prev");
    // console.log(targetRef.current.scrollLeft);
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  };

  const btnPressNext = () => {
    targetRef.current.scrollLeft += 100;
    // box.scrollLeft = box.scrollLeft + firstCardWidth;
    console.log("next");

    //   setActiveIndex(activeIndex === 1 ? len : activeIndex + 1);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseDown = (event: any) => {
    // console.log("x", event?.clientX);
    setStartX(event.clientX);
    setIsMouseDown(true);
  };
  const handleMouseMove = (event: any) => {
    if (!mouseDown || !targetRef.current) return;
    event.preventDefault();
    const deltaX = event.clientX - startX; //* 0.115;
    console.log("del", deltaX);
    targetRef.current.scrollLeft = scrollLeft - deltaX;
  };
  const handleScroll = () => {
    setScrollLeft(targetRef.current.scrollLeft);
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

  const [selectedResource, setSelectedResource] = useState(0);
  const resourceHeaders = [
    { name: "Blogs", id: 0 },
    { name: "Webiners and Videos", id: 1 },
    { name: "Documentation", id: 2 },
    { name: "API Support", id: 3 },
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-x-clip">
      <div className="container">
        <div className="max-w-[620px] mx-auto">
          <div className="flex justify-center flex-col items-center gap-2">
            <div className="tag">Why we are the best</div>
            <h2 className="section-title">Guide you every step of the way</h2>

            <p className="section-desc">
              Our content is designed to provide practical guidance,
              step-by-step tutorials, and best practices, helping teams navigate
              the complexities of integrating various cloud platforms.
            </p>
            <div className="mt-6 p-2 shadow-xl flex flex-row items-center gap-2 md:gap-4 border-[#ccc] border-[1px] rounded-3xl">
              {resourceHeaders?.map((item: { name: string; id: number }) => (
                <div
                  key={item?.id}
                  onClick={() => setSelectedResource(item?.id)}
                  className={
                    selectedResource === item?.id
                      ? "active-resource"
                      : "inactive-resource"
                  }
                >
                  {item?.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            ref={targetRef}
            onMouseDown={(event: any) => handleMouseDown(event)}
            onMouseMove={(event: any) => handleMouseMove(event)}
            onScroll={() => handleScroll()}
            onMouseUp={() => handleMouseUp()}
            className="mt-20 overflow-hidden p-2"
          >
            <div className="flex gap-5 px-4 scroll-smooth">
              {slideData
                ?.filter((x: any) => x?.class === selectedResource)
                .map((item: any, index: Key | null | undefined) => (
                  <CardItem
                    key={index}
                    // active={index === activeIndex ? true : false}
                    link={item?.link}
                    title={item?.title}
                    desc={item?.desc}
                    linkName={item?.linkName}
                    // icon={<Cloudy />}
                  />
                ))}
            </div>
            <ArrowsSlider prevSlide={btnPressPrev} nextSlide={btnPressNext} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resources;
