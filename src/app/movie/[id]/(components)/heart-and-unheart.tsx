"use client";

import { useFavoritesContext } from "@/app/lib/context/favorites-context";
import React from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { MovieDetailedType } from "@/app/lib/types";

type HeartAndUnheartProps = {
  movie: MovieDetailedType;
};

const HeartAndUnheart = ({ movie }: HeartAndUnheartProps) => {
  const { favoriteMovies, setFavoriteMovies } = useFavoritesContext();

  const isMovieFavorite =
    favoriteMovies.map((movie) => movie.id).indexOf(movie.id) !== -1;

    // TODO: make this reusable
    const handleOnClick = () => {
    if (isMovieFavorite) {
      const filteredMovies = favoriteMovies.filter(
        (item) => item.id !== movie.id
      );

      setFavoriteMovies(filteredMovies);
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  return (
    <div className="flex h-fit absolute right-6 top-6">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();

          handleOnClick();
        }}
      >
        {isMovieFavorite ? (
          <HeartIconSolid className="size-7 text-red-700" />
        ) : (
          <HeartIconOutline className="size-7 text-red-700" />
        )}
      </button>
    </div>
  );
};

export default HeartAndUnheart;
