import React from "react";
import { fetchInstance } from "../lib/fetch";
import Carousel from "./carousel";

type CarouselWrapperProps = {
  url: string;
  title?: string;
};

const CarouselWrapper = async ({ url, title }: CarouselWrapperProps) => {
  const data = await fetchInstance(url);

  console.log("data", data);

  return (
    <div className="flex flex-col">
      {title && <h2 className="my-4 text-2xl font-bold text-white">{title}</h2>}

      <div>{<Carousel array={data.results} />}</div>
    </div>
  );
};

export default CarouselWrapper;
