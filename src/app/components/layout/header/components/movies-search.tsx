"use client";

import SearchInput from "@/app/components/inputs/search-input";
import { fetchInstance } from "@/app/lib/fetch";
import { MovieDetailedType, Movies } from "@/app/lib/types";
import { usePathname } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type SearchProps = {
  className?: React.ComponentProps<"div">["className"];
  searchResults?: (items: MovieDetailedType[]) => ReactNode;
  searchInputClassName?: React.ComponentProps<"div">["className"];
};

const MoviesSearch = ({
  searchResults,
  className,
  searchInputClassName,
}: SearchProps) => {
  const [searchedMovies, setSearchedMovies] = useState<MovieDetailedType[]>([]);

  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(async (term) => {
    if (term === "") {
      setSearchedMovies([]);
      return;
    }

    const moviesData = await fetchInstance<Movies>(
      `/search/multi?query=${term}&language=en_US`
    );

    if (moviesData) {
      setSearchedMovies(moviesData.results);
    }
  }, 300);

  useEffect(() => {
    setSearchedMovies([]);
  }, [pathname]);

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <SearchInput
        handleOnSearch={handleSearch}
        className={searchInputClassName}
      />

      {searchResults?.(searchedMovies)}
    </div>
  );
};

export default MoviesSearch;
