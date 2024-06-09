import { Suspense } from "react";
import { HEADER_HEIGHT, LAYOUT_STYLES } from "./lib/constants";
import CarouselSkeleton from "./components/carousel/carousel-skeleton";
import CarouselWrapper from "./components/carousel/carousel-wrapper";
import Hero from "./components/layout/hero/hero";

const sharedSkeletonProps = {
  cardsSkeletonLength: 12,
  className: "mt-6",
};

const Home = () => {
  return (
    <main className={`flex flex-col gap-14`}>
      <Hero />

      <div
        className={`sticky top-0 w-[100%] h-[${HEADER_HEIGHT}px] bg-main z-40`}
      />

      <div className={`${LAYOUT_STYLES}`}>
        {/* now playing movies */}
        <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
          <CarouselWrapper url="/movie/now_playing" title="Now playing" />
        </Suspense>

        {/* now playing movies */}
        <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
          <CarouselWrapper url="/movie/popular" title="Popular" />
        </Suspense>

        {/* top rated movies */}
        <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
          <CarouselWrapper url="/movie/top_rated" title="Top rated" />
        </Suspense>

        {/* top rated movies */}
        <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
          <CarouselWrapper url="/movie/upcoming" title="Upcoming" />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
