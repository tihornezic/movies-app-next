// import PosterImage from "./(components)/poster-image";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import PosterImage from "./poster-image";
import { MovieBaseType, MovieDetailedType, Movies } from "@/app/lib/types";
import { fetchInstance } from "@/app/lib/fetch";
import Carousel from "@/app/components/carousel";
import MovieCard from "@/app/components/movie-card";
import Slider from "react-slick";

type MovieInfoProps = {
  movieId: string;
  movieData: MovieDetailedType;
};

const MovieInfo = async ({ movieId, movieData }: MovieInfoProps) => {
  const creditsData = await fetchInstance<any>(`/movie/${movieId}/credits`);

  console.log("creditsData", creditsData);

  const date = new Date(movieData.release_date);
  const year = date.getFullYear();

  const director = creditsData?.crew?.find(
    (member: any) => member.job === "Director"
  );

  const cast = creditsData?.cast;

  console.log("cast", cast);

  const casts = cast.slice(0, 4);

  const castCarouselArray = casts.map((item: any) => (
    <div key={item.id} className="pr-8 w-7 h-12 bg-slate-200">
      {item.name}
    </div>
  ));

  console.log("castCarouselArray", castCarouselArray);

  const moviesData = await fetchInstance<Movies>("/movie/now_playing");

  const moviesCarouselArray = moviesData.results.map((item) => (
    <div key={item.id} className="pr-4">
      <MovieCard id={item.id} posterPath={item.poster_path} alt={item.title} />
    </div>
  ));

  return (
    <div className="absolute flex gap-5 w-[100%] sm:w-[85%] lg:w-[55%] h-fit left-[50%] translate-x-[-50%] top-[20%] sm:top-[30%] lg:top-[50%] rounded-md bg-main p-5">
      <PosterImage posterPath={movieData.poster_path} alt={movieData.title} />

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          {/* movie title & release year */}
          <div className="flex items-center h-fit gap-1">
            <h4 className="text-white font-bold text-2xl">{movieData.title}</h4>

            <span className="text-gray-400 h-fit text-lg self-end">
              ({year})
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-400 font-normal text-sm">DIRECTOR</span>
            <span className="text-teal-700 text-sm">{director.name}</span>
          </div>

          {/* genres */}
          <div>
            {movieData.genres.map((genre, index) => (
              <span key={genre.id} className="text-gray-600 text-sm">
                {(index ? ", " : "") +
                  genre.name[0].toLocaleLowerCase() +
                  genre.name.slice(1)}
              </span>
            ))}
          </div>
        </div>

        {/* overview */}
        <p className="text-white">{movieData.overview}</p>

        <div className="flex flex-col">
          <span className="text-gray-400 font-normal text-sm">CAST</span>
          <span className="text-teal-700 text-sm">{director.name}</span>
        </div>

        <div className="block w-100%">
          <Carousel carouselArray={castCarouselArray} />
          {/* <Test /> */}

          {/* <Carousel carouselArray={moviesCarouselArray} /> */}
        </div>

        {/* favorite icons */}
        <div className="flex h-fit absolute right-6 top-6">
          <HeartIconOutline className="size-7 text-red-700" />
          {/* <HeartIconSolid className="size-6 text-red-700" /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
