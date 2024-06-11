"use client";

import { useFavoritesContext } from "@/app/lib/context/favorites-context";
import React from "react";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { MovieDetailedType } from "@/app/lib/types";
import useManipulateFavoriteMovies from "@/app/lib/hooks/useManipulateFavoriteMovies";

type HeartAndUnheartProps = {
  movie: MovieDetailedType;
};

const HeartAndUnheart = ({ movie }: HeartAndUnheartProps) => {
  const { manipulateFavoriteMovies, isMovieFavorite } =
    useManipulateFavoriteMovies();

  const handleOnClick = () => {
    manipulateFavoriteMovies(movie);
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
        {isMovieFavorite(movie) ? (
          <HeartIconSolid className="size-7 text-red-700" />
        ) : (
          <HeartIconOutline className="size-7 text-red-700" />
        )}
      </button>
    </div>
  );
};

export default HeartAndUnheart;
