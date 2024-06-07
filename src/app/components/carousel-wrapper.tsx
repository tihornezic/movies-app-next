import React from "react";
import { fetchInstance } from "../lib/fetch";
import Carousel from "./carousel";
import { MovieBaseType, Movies } from "../lib/types";

type CarouselWrapperProps = {
  url: string;
  title?: string;
};

const CarouselWrapper = async ({ url, title }: CarouselWrapperProps) => {
  const moviesData = await fetchInstance<Movies>(url);

  console.log("moviesData", moviesData);

  return (
    <div className="flex flex-col">
      {title && <h2 className="my-4 text-2xl font-bold text-white">{title}</h2>}

      <Carousel moviesArray={moviesData.results} />
    </div>
  );
};

export default CarouselWrapper;
