import { useEffect } from "react";
import { useFavoritesContext } from "../context/favorites-context";
import { MovieDetailedType } from "../types";

const useManipulateFavoriteMovies = () => {
  const { favoriteMovies, setFavoriteMovies } = useFavoritesContext();

  const isMovieFavorite = (movie: MovieDetailedType) =>
    favoriteMovies.map((movie) => movie.id).indexOf(movie.id) !== -1;

  const manipulateFavoriteMovies = (movie: MovieDetailedType) => {
    if (isMovieFavorite(movie)) {
      const filteredMovies = favoriteMovies.filter(
        (item) => item.id !== movie.id
      );

      setFavoriteMovies(filteredMovies);
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  return { favoriteMovies, manipulateFavoriteMovies, isMovieFavorite };
};

export default useManipulateFavoriteMovies;
