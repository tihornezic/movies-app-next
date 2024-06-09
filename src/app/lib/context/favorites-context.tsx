"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { MovieDetailedType } from "../types";

type FavoritesContext = {
  favoriteMovies: MovieDetailedType[];
  setFavoriteMovies: Dispatch<SetStateAction<MovieDetailedType[]>>;
};

export const FavoritesContext = createContext<FavoritesContext | null>(null);

const FavoritesContextProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDetailedType[]>([]);

  useEffect(() => {
    const ls = localStorage.getItem("favoriteMoviesIds")
      ? JSON.parse(localStorage.getItem("favoriteMoviesIds") as string)
      : [];

    setFavoriteMovies(ls);
  }, []);

  return (
    <FavoritesContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavoritesContext must be used within the FavoritesContextProvider"
    );
  }

  return context;
};

export default FavoritesContextProvider;
