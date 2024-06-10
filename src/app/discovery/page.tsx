import { Suspense, useState } from "react";
import CarouselSkeleton from "../components/carousel/carousel-skeleton";
import CarouselWrapper from "../components/carousel/carousel-wrapper";
import { LAYOUT_STYLES } from "../lib/constants";
import Filters from "../components/filters/filters";
import { fetchInstance } from "../lib/fetch";
import { EnumTrigger, Genre, Movies } from "../lib/types";
import MovieCard from "../components/movie-card/movie-card";
import RangeSlider from "../components/range-slider/range-slider";
import Popover from "../components/popover/popover";

const sharedSkeletonProps = {
  cardsSkeletonLength: 12,
  // className: "mt-6",
};

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    with_genres?: string;
    // page?: string;
  };
}) => {

  const params = new URLSearchParams(searchParams).toString();

  console.log("params", params);

  const movieGenres = await fetchInstance<{ genres: Genre[] }>(
    "/genre/movie/list"
  );

  return (
    <div className={`${LAYOUT_STYLES} flex flex-col mt-14 gap-14`}>
      <div className="flex items-center gap-12 mb-6">
        <h2 className="text-white text-4xl font-bold">Discover movies</h2>

        <Popover
          content={<Filters filters={movieGenres.genres} />}
          label="Genres"
          className="w-[500px]"
        />

        <Popover
          content={<RangeSlider min={1900} max={2024} label="Year" />}
          label="Year"
          className="w-[300px]"
        />
      </div>

      {/* {query ? ( */}
      {params ? (
        <Suspense
          key={params}
          fallback={
            <CarouselSkeleton {...sharedSkeletonProps} disableHeading />
          }
        >
          <CarouselWrapper
            // url={`/discover/movie?with_genres=${query}&sort_by=vote_count.desc`}
            url={`/discover/movie?${params}&sort_by=vote_count.desc`}
            // title={movieGenres.genres.filtert}
          />
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <CarouselSkeleton {...sharedSkeletonProps} disableHeading />
          }
        >
          <CarouselWrapper
            url={`/discover/movie?with_genres=${878}&sort_by=vote_count.desc`}
          />
        </Suspense>
      )}

      <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
        <CarouselWrapper url="/movie/popular" title="Popular" />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
        <CarouselWrapper url="/movie/now_playing" title="Now playing" />
      </Suspense>

      {/* <div className="grid grid-cols-1 sm:grid-cols-7 w-[100%] gap-[50px] justify-items-stretch">
        {filteredMovies.results.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div> */}
    </div>
  );
};

export default Page;
