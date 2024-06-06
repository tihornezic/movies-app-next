"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";
import "./carousel.css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

type CarouselProps = {
  array: any;
};

const Carousel = ({ array }: CarouselProps) => {
  const posterUrl = "https://image.tmdb.org/t/p/w200/";
  console.log("array", `${posterUrl}/${array[0].poster_path}`);

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const slider = useRef<any>();

  const previous = () => {
    slider.current.slickPrev();
  };

  const next = () => {
    slider.current.slickNext();
  };

  return (
    // <div className="slider-container">

    <div className="carousel" style={{ position: "relative" }}>
      <button
        className="aaaa"
        onClick={previous}
        style={{
          // display: "flex !important",
          right: 0,
          background: "rgba(6, 13, 23, .8)",
          cursor: "pointer",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "40px",
          opacity: 0,
          // display: "none",
          // fontSize: "25px",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 30,
        }}
      >
        <ChevronLeftIcon className="size-6 text-white" />
      </button>

      <div
        className="slider-container"
        // style={{ position: "relative" }}
        style={{
          // position: "relative",
          maskImage: "linear-gradient(90deg, #060d17 90%, transparent)",
        }}
        // style={{ position: "relative" }}
      >
        <Slider ref={(c) => (slider.current = c)} {...settings}>
          {array.map((item: any) => (
            // <div className="w-[160px] h-[240px] bg-black" />

            <div key={item.id} className="pr-4">
              <Image
                src={`${posterUrl}/${item.poster_path}`}
                alt="logo"
                width={160}
                height={240}
                // objectFit="cover"
                // fill
                // className="w-full h-full top-0 left-0 object-cover"
                // width="50"
                // height="50"
              />
            </div>
          ))}
        </Slider>
      </div>

      <button
        className="aaaa"
        onClick={next}
        style={{
          // display: "flex !important",
          right: 0,
          background: "rgba(6, 13, 23, .8)",
          color: "white",
          cursor: "pointer",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "40px",
          opacity: 0,
          // display: "none",
          // fontSize: "25px",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 30,
        }}
      >
        <ChevronRightIcon className="size-6 text-white" />
      </button>
    </div>
  );
};

export default Carousel;
