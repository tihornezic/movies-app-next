import React from "react";
import { fetchInstance } from "../lib/fetch";
import Carousel from "./carousel";

type CarouselWrapperProps = {
  url: string;
};

const CarouselWrapper = async ({ url }: CarouselWrapperProps) => {
  const data = await fetchInstance(url);

  console.log('data', data)

  return <div>{<Carousel array={data.results} />}</div>;
};

export default CarouselWrapper;
