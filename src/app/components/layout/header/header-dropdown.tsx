"use client";

import { useFavoritesContext } from "@/app/lib/context/favorites-context";
import styles from "./header.module.css";
import clsx from "clsx";
import MovieListItem from "../../movie-list-item/movie-list-item";

const HeaderDropdown = () => {
  const { favoriteMovies } = useFavoritesContext();

  const isEmptyFavorites = favoriteMovies.length === 0;

  return (
    <div
      className={clsx(
        `${styles["header-dropdown"]} w-[380px] h-[300px] rounded-md bg-secondary overflow-y-auto`,
        {
          "flex items-center justify-center": isEmptyFavorites,
        }
      )}
    >
      {isEmptyFavorites && (
        <span className="text-gray-200 font-medium">
          You don&rsquo;t have any favorite movies yet!
        </span>
      )}

      {favoriteMovies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default HeaderDropdown;
