"use client";

import Image from "next/image";
import { BACKDROP_URL } from "../../../lib/constants";

type BackdropImageProps = {
  backdropPath: string;
  alt: string;
};

const BackdropImage = ({ backdropPath, alt }: BackdropImageProps) => {
  if (backdropPath === "") {
    return <div className="bg-gray-800 h-[502px]"></div>;
  }

  return (
    <Image
      src={`${BACKDROP_URL}/${backdropPath}`}
      alt={alt}
      sizes="100vw"
      style={{
        width: "100%",
        height: "auto",
      }}
      width={1426}
      height={502}
      data-loaded="false"
      onLoad={(event) => {
        event.currentTarget.setAttribute("data-loaded", "true");
      }}
      className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100/10"
    />
  );
};

export default BackdropImage;
