/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
// import "./swiper.css";
import { MoveLeft, MoveRight } from "lucide-react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Swiper({
  children,
  showArrowsProp,
}: {
  children: any;
  showArrowsProp?: any;
}) {
  const [startX, setStartX] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    setShowArrows(showArrowsProp);
  }, [showArrowsProp]);

  function handleOnMouseDown(event: any) {
    setStartX(event.clientX);
    setIsMouseDown(true);
  }

  function handleOnMouseMove(event: any) {
    if (!isMouseDown || !swiperRef.current) return;
    event.preventDefault();
    const deltaX = (event.clientX - startX) * 0.115;
    swiperRef.current.scrollLeft = scrollLeft - deltaX;
  }

  function handleOnMouseUp() {
    setIsMouseDown(false);
  }

  function handleOnScroll() {
    setScrollLeft(swiperRef.current.scrollLeft);
  }

  return (
    <div style={{ position: "relative" }}>
      {showArrows && (
        <>
          {/* <div
            className="leftArrow"
            onClick={() => {
              swiperRef.current.scrollLeft -= 100;
            }}
          >
            <ArrowLeft />
          </div>
          <div
            onClick={() => {
              swiperRef.current.scrollLeft += 100;
            }}
            className="RightArrow"
          >
            <ArrowRight />
          </div> */}
          <div className="w-full">
            <div
              className="absolute left-0 top-[50%] rounded-full flex items-center justify-center cursor-pointer bg-blue-400 hover:bg-white w-10 h-10 text-white hover:text-black/60"
              onClick={() => (swiperRef.current.scrollLeft -= 320)}
            >
              <MoveLeft className="w-5 h-5" />
            </div>
            <div
              className="absolute right-0 top-[50%] rounded-full flex items-center justify-center cursor-pointer bg-blue-400 hover:bg-white w-10 h-10 text-white hover:text-black/60"
              onClick={() => (swiperRef.current.scrollLeft += 320)}
            >
              <MoveRight className="w-5 h-5" />
            </div>
          </div>
        </>
      )}

      <div
        onMouseDown={(event) => {
          handleOnMouseDown(event);
        }}
        onMouseMove={(event) => {
          handleOnMouseMove(event);
        }}
        onMouseUp={() => {
          handleOnMouseUp();
        }}
        onScroll={() => {
          handleOnScroll();
        }}
        ref={swiperRef}
        className=""
      >
        {" "}
        <div className="flex gap-5 px-4 relative overflow-x-clip scroll-smooth">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Swiper;
