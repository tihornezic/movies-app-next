import Link from "next/link";
import Image from "next/image";
import { POSTER_URL_SMALL } from "@/app/lib/constants";
import { MovieDetailedType } from "@/app/lib/types";
import styles from "./movie-item.module.css";
import useManipulateFavoriteMovies from "@/app/lib/hooks/useManipulateFavoriteMovies";

type MovieListItemProps = {
  movie: MovieDetailedType;
  onClick?: () => void;
  className?: React.ComponentProps<"div">["className"];
};

const MovieItem = ({ movie, onClick, className }: MovieListItemProps) => {
  const { manipulateFavoriteMovies, isMovieFavorite } =
    useManipulateFavoriteMovies();

  const date = new Date(movie.release_date ?? (movie.first_air_date as string));
  const year = date.getFullYear();

  const handleOnClick = () => {
    manipulateFavoriteMovies(movie);
  };

  return (
    <Link
      key={movie.id}
      href={`/movie/${movie.id}`}
      className={styles.link}
      onClick={onClick}
    >
      <div
        className={`${styles["movie-list-item"]} rounded-sm flex items-center py-3 px-4 gap-6 ${className}`}
      >
        {movie.poster_path ? (
          <Image
            src={`${POSTER_URL_SMALL}/${movie.poster_path}`}
            alt={movie.title ?? (movie.name as string)}
            width={60}
            height={90}
          />
        ) : (
          <div className="w-[85px] h-[90px] rounded-sm bg-gray-700 flex items-center justify-center">
            <span className="text-gray-300 font-bold">?</span>
          </div>
        )}

        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex items-center h-fit gap-1">
            <h2 className="text-white font-bold text-md">
              {movie.title ?? movie.name}
              {"  "}
              <span className="text-gray-400 h-fit text-sm font-medium">
                ({isNaN(year) ? "N/A" : year})
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();

              handleOnClick();
            }}
            className="flex gap-1 items-center bottom-0 py-1 px-2 text-xs w-max font-medium text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200"
          >
            {isMovieFavorite(movie) ? (
              <span>Remove from favorites</span>
            ) : (
              <span>Add to favorites</span>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;
