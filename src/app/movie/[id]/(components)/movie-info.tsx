// import PosterImage from "./(components)/poster-image";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import PosterImage from "./poster-image";
import { MovieBaseType, MovieDetailedType } from "@/app/lib/types";

type MovieInfoProps = {
  posterPath: MovieDetailedType["poster_path"];
  title: MovieDetailedType["title"];
  year: number;
  genres: MovieDetailedType["genres"];
  overview: MovieDetailedType["overview"];
};

const MovieInfo = ({
  title,
  posterPath,
  year,
  genres,
  overview,
}: MovieInfoProps) => {
  return (
    <div className="absolute flex gap-5 w-[100%] sm:w-[85%] lg:w-[55%] h-fit left-[50%] translate-x-[-50%] top-[20%] sm:top-[30%] lg:top-[50%] rounded-md bg-main p-5">
      {/* <div className="w-[500px]"> */}
      <PosterImage posterPath={posterPath} alt={title} />
      {/* </div> */}

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          {/* movie title & release year */}
          <div className="flex items-center h-fit gap-1">
            <h4 className="text-white font-bold text-2xl">{title}</h4>

            <span className="text-gray-400 h-fit text-lg self-end">
              ({year})
            </span>
          </div>

          {/* genres */}
          <div>
            {genres.map((genre, index) => (
              <span key={genre.id} className="text-gray-600 text-sm">
                {(index ? ", " : "") +
                  genre.name[0].toLocaleLowerCase() +
                  genre.name.slice(1)}
              </span>
            ))}
          </div>
        </div>

        {/* overview */}
        <p className="text-white">{overview}</p>

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
