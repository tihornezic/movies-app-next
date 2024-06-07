import { Suspense } from "react";
import CarouselWrapper from "./components/carousel-wrapper";
import CheckOutMovies from "./components/check-out-movies";
import CarouselSkeleton from "./components/carousel-skeleton";
import { LAYOUT_STYLES } from "./lib/constants";

const sharedSkeletonProps = {
  cardsSkeletonLength: 12,
  className: "mt-6",
};

const Home = () => {
  return (
    <main className={`${LAYOUT_STYLES} flex flex-col gap-14`}>
      <CheckOutMovies />

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
    </main>
  );
};

export default Home;
