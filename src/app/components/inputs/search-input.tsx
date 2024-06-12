"use client";

import React from "react";
import { DebouncedState } from "use-debounce";

type SearchProps = {
  className?: React.ComponentProps<"div">["className"];
  handleOnSearch: DebouncedState<(term: string) => Promise<void>>;
};

const Search = ({ handleOnSearch, className }: SearchProps) => {
  const handleOnChange = (term: string) => {
    handleOnSearch(term);
  };

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

      <input
        type="text"
        autoComplete="off"
        onChange={(e) => {
          handleOnChange(e.target.value);
        }}
        className="h-8 py-1 pl-10 pr-4 rounded-sm text-sm w-[100%] bg-gray-900 text-white focus-visible:outline-none"
        placeholder="Search for movies..."
        required
      />
    </div>
  );
};

export default Search;
