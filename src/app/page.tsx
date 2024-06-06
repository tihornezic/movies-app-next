import Image from "next/image";
import { fetchInstance } from "./lib/fetch";
import { Suspense } from "react";
import Carousel from "./components/carousel";
import CarouselWrapper from "./components/carousel-wrapper";
import CheckOutMovies from "./components/check-out-movies";
import CarouselSkeleton from "./components/carousel-skeleton";

const Home = () => {
  return (
    <main className="flex flex-col gap-14">
      <CheckOutMovies />

      <Suspense
        fallback={
          <CarouselSkeleton cardsSkeletonLength={12} className="mt-6" />
        }
      >
        <CarouselWrapper url="/movie/now_playing" title="Now playing" />
      </Suspense>
    </main>
  );
};

export default Home;
