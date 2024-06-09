"use client";

import Image from "next/image";
import Link from "next/link";
import { POSTER_URL_SMALL } from "../../lib/constants";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useFavoritesContext } from "../../lib/context/favorites-context";
import { MovieDetailedType } from "../../lib/types";
import styles from "./movie-card.module.css";

type MovieCardProps = {
  movieDetails: MovieDetailedType;
};

const MovieCard = ({ movieDetails }: MovieCardProps) => {
  const { favoriteMovies, setFavoriteMovies } = useFavoritesContext();

  const isMovieFavorite =
    favoriteMovies.map((movie: any) => movie.id).indexOf(movieDetails.id) !==
    -1;

  useEffect(() => {
    localStorage.setItem("favoriteMoviesIds", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  // TODO: make this reusable
  const handleOnClick = () => {
    if (isMovieFavorite) {
      const filteredMovies = favoriteMovies.filter(
        (movie: any) => movie.id !== movieDetails.id
      );

      setFavoriteMovies(filteredMovies);
    } else {
      setFavoriteMovies([...favoriteMovies, movieDetails]);
    }
  };

  return (
    <Link
      href={`/movie/${movieDetails.id}`}
      className={`${styles["movie-card"]} relative`}
    >
      <Image
        src={`${POSTER_URL_SMALL}/${movieDetails.poster_path}`}
        alt={movieDetails.title}
        width={190}
        height={240}
        priority
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
          {isMovieFavorite ? (
            <HeartIconSolid className="size-6 text-red-700" />
          ) : (
            <HeartIconOutline className="size-6 text-red-700" />
          )}

          {isMovieFavorite ? (
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
