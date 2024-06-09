import Link from "next/link";
import Image from "next/image";
import { POSTER_URL_SMALL } from "@/app/lib/constants";
import { MovieDetailedType } from "@/app/lib/types";
import { useFavoritesContext } from "@/app/lib/context/favorites-context";
import styles from "./movie-list-item.module.css";

type MovieListItemProps = {
  movie: MovieDetailedType;
};

// TODO: make this more reusable!
const MovieListItem = ({ movie }: MovieListItemProps) => {
  const { favoriteMovies, setFavoriteMovies } = useFavoritesContext();

  const date = new Date(movie.release_date);
  const year = date.getFullYear();

  return (
    <Link key={movie.id} href={`/movie/${movie.id}`} className={styles.link}>
      <div
        className={`${styles["movie-list-item"]} flex items-center py-3 px-4 gap-6`}
      >
        <Image
          src={`${POSTER_URL_SMALL}/${movie.poster_path}`}
          alt={movie.title}
          width={60}
          height={60}
        />

        <div className="flex flex-col gap-2 w-[100%]">
          <div className="flex items-center h-fit gap-1">
            <h2 className="text-white font-bold text-md">
              {movie.title}
              {"  "}
              <span className="text-gray-400 h-fit text-sm font-medium">
                ({year})
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();

              const filteredMovies = favoriteMovies.filter(
                (item) => item.id !== movie.id
              );

              setFavoriteMovies(filteredMovies);
            }}
            className="flex gap-1 items-center bottom-0 py-1 px-2 text-xs w-max font-medium text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200"
          >
            Remove from favorites
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieListItem;
