import { Suspense } from "react";
import { HEADER_HEIGHT, LAYOUT_STYLES } from "./lib/constants";
import CarouselSkeleton from "./components/carousel/carousel-skeleton";
import CarouselWrapper from "./components/carousel/carousel-wrapper";
import Hero from "./components/layout/hero/hero";
import FeatureCard from "./components/feature-card/feature-card";
import { usePathname } from "next/navigation";

const sharedSkeletonProps = {
  cardsSkeletonLength: 12,
  className: "mt-6",
};

const Home = () => {
  return (
    <main className={`flex flex-col gap-7`}>
      <Hero />

      <div
        className={`sticky top-0 w-[100%] h-[${HEADER_HEIGHT}px] bg-main z-40`}
      />

      <div
        className={`${LAYOUT_STYLES} flex flex-col lg:flex-row justify-between gap-y-[12%] sm:gap-[12%] w-[100%] z-50 mt-[-50px] mb-7`}
      >
        <FeatureCard
          tag="All at one place"
          heading="Your full guide for discovering movies"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt culpa aspernatur labore repellat quam?"
          imgSrc="/popcorn.png"
        />

        <FeatureCard
          tag="All at one place"
          heading="Your full guide for discovering movies"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt culpa aspernatur labore repellat quam?"
          imgSrc="/tickets.png"
        />

        <FeatureCard
          tag="All at one place"
          heading="Your full guide for discovering movies"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt culpa aspernatur labore repellat quam?"
          imgSrc="/action.png"
        />
      </div>

      <div className={`${LAYOUT_STYLES} mt-6 `}>
        <h2 className="text-white text-5xl font-bold max-w-[50%]">Search new, popular & upcoming movies</h2>
      </div>

      <div className={`${LAYOUT_STYLES} flex flex-col gap-14 mt-8`}>
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
