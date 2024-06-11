"use client";

import Image from "next/image";
import Link from "next/link";
import { POSTER_URL_SMALL } from "../../lib/constants";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { MovieDetailedType } from "../../lib/types";
import styles from "./movie-card.module.css";
import useManipulateFavoriteMovies from "@/app/lib/hooks/useManipulateFavoriteMovies";

type MovieCardProps = {
  movieDetails: MovieDetailedType;
};

const MovieCard = ({ movieDetails }: MovieCardProps) => {
  const { manipulateFavoriteMovies, isMovieFavorite } =
    useManipulateFavoriteMovies();

  const handleOnClick = () => {
    manipulateFavoriteMovies(movieDetails);
  };

  return (
    <Link
      href={`/movie/${movieDetails.id}`}
      className={`${styles["movie-card"]} relative`}
    >
      <Image
        src={`${POSTER_URL_SMALL}/${movieDetails.poster_path}`}
        alt={movieDetails.title || (movieDetails.name as string)}
        width={190}
        height={240}
        className="rounded-md"
      />

      <div className={styles["movie-card-overlay"]}>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();

            handleOnClick();
          }}
          className={`${styles["movie-card-button"]} flex gap-1 items-center bottom-0 py-1 px-2 text-xs w-max font-medium text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200`}
        >
          {isMovieFavorite(movieDetails) ? (
            <HeartIconSolid className="size-6 text-red-700" />
          ) : (
            <HeartIconOutline className="size-6 text-red-700" />
          )}

          {isMovieFavorite(movieDetails) ? (
            <span>Remove from favorites</span>
          ) : (
            <span>Add to favorites</span>
          )}
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;
