"use client";

import clsx from "clsx";
import React, { useState } from "react";

type SearchProps = {
  className?: React.ComponentProps<"div">["className"];
};

const Search = ({ className }: SearchProps) => {
  const [isSearchActive, setIsSearchActive] = useState(false);

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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <input
        type="text"
        id="default-search"
        autoComplete="off"
        className="h-8 py-1 pl-10 pr-4 rounded-sm text-sm min-w-96 bg-secondary text-white focus-visible:outline-none"
        onFocus={() => setIsSearchActive(true)}
        onBlur={() => setIsSearchActive(false)}
        placeholder="Search for movies..."
        required
      />

      <div
        className={clsx("absolute w-full h-10 bg-secondary", {
          block: isSearchActive,
          hidden: !isSearchActive,
        })}
      ></div>
    </div>
  );
};

export default Search;
