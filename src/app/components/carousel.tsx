"use client";

import Slider from "react-slick";
import { CSSProperties, ReactNode, useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import MovieCard from "./movie-card";
import { Movies } from "../lib/types";

type CarouselProps = {
  moviesArray: Movies["results"];
};

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

const Carousel = ({ moviesArray }: CarouselProps) => {
  const sliderRef = useRef<any>();

  const handleOnPrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleOnNext = () => {
    sliderRef.current.slickNext();
  };

  const CarouselButton = ({
    children,
    onClick,
    style,
  }: {
    children: ReactNode;
    onClick: () => void;
    style?: CSSProperties | undefined;
  }) => {
    return (
      <button
        className="carousel-button"
        onClick={onClick}
        style={{
          right: 0,
          background: "rgba(6, 13, 23, .8)",
          cursor: "pointer",
          position: "absolute",
          top: 0,
          height: "100%",
          width: "40px",
          opacity: 0,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 30,
          ...style,
        }}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="carousel relative">
      <CarouselButton onClick={handleOnPrevious} style={{ left: 0 }}>
        <ChevronLeftIcon className="size-6 text-white" />
      </CarouselButton>

      <div
        className="slider-container"
        style={{
          maskImage: "linear-gradient(90deg, #060d17 90%, transparent)",
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {moviesArray.map((item) => (
            <div key={item.id} className="pr-4">
              <MovieCard
                id={item.id}
                posterPath={item.poster_path}
                alt={item.title}
              />
            </div>
          ))}
        </Slider>
      </div>

      <CarouselButton onClick={handleOnNext}>
        <ChevronRightIcon className="size-6 text-white" />
      </CarouselButton>
    </div>
  );
};

export default Carousel;
