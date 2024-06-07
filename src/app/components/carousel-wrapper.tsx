import React from "react";
import { fetchInstance } from "../lib/fetch";
import Carousel from "./carousel";
import { MovieBaseType, Movies } from "../lib/types";
import MovieCard from "./movie-card";

type CarouselWrapperProps = {
  url: string;
  title?: string;
};

const CarouselWrapper = async ({ url, title }: CarouselWrapperProps) => {
  const moviesData = await fetchInstance<Movies>(url);

  console.log("moviesData", moviesData);

  const moviesCarouselArray = moviesData.results.map((item) => (
    <div key={item.id} className="pr-4">
      <MovieCard id={item.id} posterPath={item.poster_path} alt={item.title} />
    </div>
  ));

  return (
    <div className="flex flex-col">
      {title && <h2 className="my-4 text-2xl font-bold text-white">{title}</h2>}

      <Carousel carouselArray={moviesCarouselArray} />
    </div>
  );
};

export default CarouselWrapper;
