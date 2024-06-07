import React from "react";
import { fetchInstance } from "../lib/fetch";
import Carousel from "./carousel";
import { MovieBaseType, Movies } from "../lib/types";
import MovieCard from "./movie-card";

type CarouselWrapperProps = {
  url: string;
  title?: string;
  titleStyles?: React.ComponentProps<"div">["className"];
};

const CarouselWrapper = async ({ url, title, titleStyles }: CarouselWrapperProps) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const moviesData = await fetchInstance<Movies>(url);

  console.log("moviesData", moviesData);

  const moviesCarouselArray = moviesData.results.map((item) => (
    <div key={item.id} className="pr-4">
      <MovieCard id={item.id} posterPath={item.poster_path} alt={item.title} />
    </div>
  ));

  return (
    <div className="flex flex-col">
      {title && <h3 className={`my-4 text-2xl font-bold text-white ${titleStyles}`}>{title}</h3>}

      <Carousel carouselArray={moviesCarouselArray} />
    </div>
  );
};

export default CarouselWrapper;
