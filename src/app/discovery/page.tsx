import { Suspense } from "react";
import CarouselSkeleton from "../components/carousel/carousel-skeleton";
import CarouselWrapper from "../components/carousel/carousel-wrapper";
import { LAYOUT_STYLES } from "../lib/constants";
import GenresFilter from "./(components)/filters/genres-filter";
import { fetchInstance } from "../lib/fetch";
import { Genre } from "../lib/types";
import ReleaseYearFilter from "./(components)/filters/release-year-filter";
import Popover from "../components/popover/popover";

const sharedSkeletonProps = {
  cardsSkeletonLength: 12,
};

const genresToShow = [
  "comedy",
  "drama",
  "action",
  "crime",
  "war",
  "thriller",
  "horror",
  "western",
];

const Page = async ({
  searchParams,
}: {
  searchParams?: {
    with_genres?: string;
    primary_release_year?: string;
  };
}) => {
  const params = new URLSearchParams(searchParams).toString();

  const movieGenres = await fetchInstance<{ genres: Genre[] }>(
    "/genre/movie/list"
  );

  const pickedGenres = movieGenres.genres.filter((genre) =>
    genresToShow.includes(genre.name.toLocaleLowerCase())
  );

  const carouselsOfPickedGenres = pickedGenres.map((pickedGenre) => (
    <Suspense
      key={pickedGenre.id}
      fallback={<CarouselSkeleton {...sharedSkeletonProps} />}
    >
      <CarouselWrapper
        url={`/discover/movie?with_genres=${pickedGenre.id}&sort_by=vote_count.desc`}
        title={pickedGenre.name}
      />
    </Suspense>
  ));

  return (
    <div className={`${LAYOUT_STYLES} flex flex-col mt-16 gap-20`}>
      {/* discover movies heading, filters & movies carousel */}
      <div className="flex flex-col gap-14">
        {/* discover movies heading & filters */}
        <div className="flex items-center gap-12">
          <h2 className="text-white text-4xl font-bold">Discover movies</h2>

          <div className="flex items-center gap-7">
            <Popover
              content={<GenresFilter filters={movieGenres.genres} />}
              label="Genres"
              className="w-[500px]"
            />

            <Popover
              content={<ReleaseYearFilter min={1900} max={2024} label="Year" />}
              label="Year"
              className="w-[300px]"
            />
          </div>
        </div>

        {params ? (
          <Suspense
            key={params}
            fallback={
              <CarouselSkeleton {...sharedSkeletonProps} disableHeading />
            }
          >
            <CarouselWrapper
              url={`/discover/movie?${params}&sort_by=vote_count.desc`}
            />
          </Suspense>
        ) : (
          <Suspense
            fallback={
              <CarouselSkeleton {...sharedSkeletonProps} disableHeading />
            }
          >
            <CarouselWrapper url="/movie/now_playing" />
          </Suspense>
        )}
      </div>

      {/*  */}
      <div className="flex flex-col gap-16">{carouselsOfPickedGenres}</div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-7 w-[100%] gap-[50px] justify-items-stretch">
        {filteredMovies.results.map((movie) => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </div> */}
    </div>
  );
};

export default Page;
