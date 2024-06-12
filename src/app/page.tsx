import { Suspense } from "react";
import { HEADER_HEIGHT, LAYOUT_STYLES } from "./lib/constants";
import CarouselSkeleton from "./components/carousel/carousel-skeleton";
import CarouselWrapper from "./components/carousel/carousel-wrapper";
import Hero from "./components/layout/hero/hero";
import FeatureCard from "./components/feature-card/feature-card";

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
          tag="Your full guide"
          heading="Your full guide for discovering movies"
          text="Filter through thousands an thousands of movies."
          imgSrc="/popcorn.png"
        />

        <FeatureCard
          tag="Add to favorites"
          heading="Store your favorites"
          text="Easily find and then add movies to favorites where you can quickly check all favorite movies."
          imgSrc="/action.png"
        />

        <FeatureCard
          tag="One search"
          heading="Use search to quickly find movie titles"
          text="Never miss out on the opportunity to find a movie."
          imgSrc="/tickets.png"
        />
      </div>

      <div className={`${LAYOUT_STYLES} mt-6 `}>
        <h2 className="text-white text-4xl md:text-5xl font-bold max-w-[50%]">
          Search new, popular & upcoming movies
        </h2>
      </div>

      <div className={`${LAYOUT_STYLES} flex flex-col gap-14 mt-8`}>
        {/* now playing movies */}
        <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
          <CarouselWrapper url="/movie/now_playing" title="Now playing" />
        </Suspense>

        {/* popular movies */}
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
