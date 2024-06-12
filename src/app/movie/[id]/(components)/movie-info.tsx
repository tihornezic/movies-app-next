import PosterImage from "./poster-image";
import { Credits, MovieDetailedType } from "@/app/lib/types";
import { fetchInstance } from "@/app/lib/fetch";
import { Suspense } from "react";
import HeartAndUnheart from "./heart-and-unheart";
import CarouselSkeleton from "@/app/components/carousel/carousel-skeleton";
import CarouselWrapper from "@/app/components/carousel/carousel-wrapper";

type MovieInfoProps = {
  movieId: string;
  movieData: MovieDetailedType;
};

const sharedSkeletonProps = {
  cardsSkeletonLength: 12,
  className: "mt-6",
};

const MovieInfo = async ({ movieId, movieData }: MovieInfoProps) => {
  const creditsData = await fetchInstance<Credits>(`/movie/${movieId}/credits`);

  const date = new Date(
    movieData.release_date || (movieData.first_air_date as string)
  );
  const year = date.getFullYear();

  const director = creditsData?.crew.find(
    (member) => member.job === "Director"
  );

  const cast = creditsData?.cast;

  const castArray =
    cast
      ?.map((item: any) => (
        <div key={item.id} className="flex gap-2">
          <span className="text-teal-700 text-sm">{item.name}</span>
          <span className="text-white text-sm">{item.character}</span>
        </div>
      ))
      .slice(0, 5) ?? [];

  return (
    <div className="absolute flex flex-col gap-9 w-[100%] sm:w-[85%] lg:w-[60%] xl:w-[65%] h-fit left-[50%] translate-x-[-50%] pb-20 top-[20%] sm:top-[30%] lg:top-[45%] rounded-md bg-main p-5">
      <div className="flex gap-5 flex-col-reverse xl:flex-row">
        <PosterImage
          posterPath={movieData.poster_path}
          alt={movieData.title || (movieData.name as string)}
          className={"self-center"}
        />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            {/* movie title & release year */}
            <div className="flex items-center h-fit gap-1 max-w-[80%]">
              <h2 className="text-white font-bold text-2xl max-w-[60%]">
                {movieData.title}{" "}
                <span className="text-gray-400 h-fit text-lg font-medium">
                  ({year})
                </span>
              </h2>
            </div>

            <div className="flex flex-col">
              <span className="text-gray-400 font-normal text-sm">
                DIRECTOR
              </span>
              <span className="text-teal-700 text-sm">
                {director?.name ?? "N/A"}
              </span>
            </div>

            {/* genres */}
            <div>
              {movieData.genres.map((genre, index) => (
                <span key={genre.id} className="text-gray-500 text-sm">
                  {(index ? ", " : "") +
                    genre.name[0].toLocaleLowerCase() +
                    genre.name.slice(1)}
                </span>
              ))}
            </div>
          </div>

          {/* overview */}
          <p className="text-white text-sm">{movieData.overview}</p>

          <div className="flex flex-col">
            <span className="text-gray-400 font-normal text-sm">CAST</span>
            {castArray}
          </div>

          {/* favorite icons */}
          <HeartAndUnheart movie={movieData} />
        </div>
      </div>

      <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
        <CarouselWrapper
          url={`/movie/${movieId}/recommendations`}
          title="Recommendations"
          titleStyles="text-[1.3rem]"
        />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton {...sharedSkeletonProps} />}>
        <CarouselWrapper
          url={`/movie/${movieId}/similar`}
          title="Similar"
          titleStyles="text-[1.3rem]"
        />
      </Suspense>
    </div>
  );
};

export default MovieInfo;
