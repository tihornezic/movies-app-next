import React from "react";
import CardSkeleton from "./card-skeleton";

type CarouselSkeletonProps = {
  cardsSkeletonLength?: number;
  className?: React.ComponentProps<"div">["className"];
};

const CarouselSkeleton = ({
  cardsSkeletonLength = 7,
  className,
}: CarouselSkeletonProps) => {
  const elements = Array.from({ length: cardsSkeletonLength }, (_, index) => (
    <CardSkeleton key={index} />
  ));

  return (
    <div
      className={`animate-pulse flex flex-col gap-2 ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, #060d17 90%, transparent)",
      }}
    >
      <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>

      <div className="flex gap-2">{elements}</div>
    </div>
  );
};

export default CarouselSkeleton;
