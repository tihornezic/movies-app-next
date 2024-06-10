"use client";

import { convertEncodedCommas } from "@/app/lib/helpers";
import { Genre } from "@/app/lib/types";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type FiltersProps = {
  // add more types if needed or make it generic
  filters: Genre[];
};

const Filters = ({ filters }: FiltersProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [selectedFilters, setSelectedFilters] = useState<Genre["id"][]>([]);

  const handleOnClick = (filter: Genre) => {
    const isSelected = selectedFilters.includes(filter.id);

    let updatedFilters;
    if (isSelected) {
      updatedFilters = selectedFilters.filter((id) => id !== filter.id);
    } else {
      updatedFilters = [...selectedFilters, filter.id];
    }
    setSelectedFilters(updatedFilters);

    // Update URL Parameters
    const params = new URLSearchParams(searchParams);

    if (updatedFilters.length === 0) {
      params.delete("with_genres");
    } else {
      const genres = updatedFilters.join(",");
      params.set("with_genres", genres);
    }

    const convertedUrl = convertEncodedCommas(params.toString());

    replace(`${pathname}?${convertedUrl}`);
  };

  // populate selectedFilters on render when refreshing/navigating from pages
  useEffect(() => {
    const search = searchParams.get("with_genres");

    console.log(search);

    if (search) {
      console.log("bo");
      setSelectedFilters(search.split(",").map(Number));
    } else {
      setSelectedFilters([]);
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-[100%]">
        <p className="text-white text-lg">Genres</p>

        <button
          className="flex gap-1 text-gray-400"
          onClick={() => {
            if (selectedFilters.length === 0) return;

            setSelectedFilters([]);
            const params = new URLSearchParams(searchParams);
            params.delete("with_genres");
            replace(`${pathname}?${params.toString()}`);
          }}
        >
          <XMarkIcon className="size-5" />

          <span className="text-sm">RESET</span>
        </button>
      </div>

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

export default Filters;
