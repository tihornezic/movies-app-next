"use client";

import { POSTER_URL_BIG } from "@/app/lib/constants";
import Image from "next/image";

type PosterImageProps = {
  posterPath: string;
  alt: string;
};

const PosterImage = ({ posterPath, alt }: PosterImageProps) => {
  return (
    <Image
      src={`${POSTER_URL_BIG}/${posterPath}`}
      sizes="100vw"
      alt={alt}
      width={300}
      height={480}
      data-loaded="false"
      onLoad={(event) => {
        event.currentTarget.setAttribute("data-loaded", "true");
      }}
      // className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 rounded-md w-[300px] h-[480px]"
      className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10 rounded-md"
    />
  );
};

export default PosterImage;
