"use client";

import useFilters from "@/app/lib/hooks/useFilters";
import { Genre } from "@/app/lib/types";
import { CheckIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import FilterNameAndResetButton from "./components/filter-name-and-reset-button";

type GenresFilterProps = {
  filters: Genre[];
};

const GenresFilter = ({ filters }: GenresFilterProps) => {
  const searchParams = useSearchParams();
  const { manipulateQueryParams, deleteQueryParams } = useFilters();
  const [selectedFilters, setSelectedFilters] = useState<Genre["id"][]>([]);

  const handleOnClick = (filter: Genre) => {
    manipulateQueryParams({
      multiFilters: true,
      queryValue: filter.id,
      queryKey: "with_genres",
      selectedFilters: selectedFilters,
      onUpdatedFilters: setSelectedFilters as any,
    });
  };

  // populate selectedFilters on render when refreshing/navigating from pages
  useEffect(() => {
    const search = searchParams.get("with_genres");

    if (search) {
      setSelectedFilters(search.split(",").map(Number));
    } else {
      setSelectedFilters([]);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <FilterNameAndResetButton
        filterName="Genres"
        onReset={() => {
          if (selectedFilters.length === 0) return;

          setSelectedFilters([]);
          deleteQueryParams({ queryKeyToDelete: "with_genres" });
        }}
      />

      <div className="grid grid-cols-2 gap-1">
        {filters.map((filter) => {
          const isSelected = selectedFilters.includes(filter.id);

          return (
            <button
              key={filter.id}
              className={clsx(
                "text-start text-[0.95rem] text-gray-400 flex gap-1 m-1 p-0.5 pl-2 rounded-md transition-all duration-100 ease-in",
                {
                  "bg-slate-700 text-white": selectedFilters.includes(
                    filter.id
                  ),
                }
              )}
              onClick={() => handleOnClick(filter)}
            >
              <CheckIcon
                className={clsx("size-5", {
                  "text-gray-100": isSelected,
                  "text-gray-700": !isSelected,
                })}
              />

              {filter.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GenresFilter;
