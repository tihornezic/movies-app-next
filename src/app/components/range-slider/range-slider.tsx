"use client";

import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { convertEncodedCommas } from "@/app/lib/helpers";

type RangeSliderProps = {
  min: number;
  max: number;
  defaultValue?: number;
  label: string;
};

const RangeSlider = ({ min, max, defaultValue, label }: RangeSliderProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = useState(defaultValue || new Date().getFullYear());

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleMouseUp = (value: any) => {
    console.log(value);

    const params = new URLSearchParams(searchParams);
    // params.set("page", "1");

    if (value) {
      params.set("primary_release_year", value);
    } else {
      params.delete("primary_release_year");
    }

    const convertedUrl = convertEncodedCommas(params.toString());

    replace(`${pathname}?${convertedUrl}`);
  };

  // populate selectedFilters on render when refreshing/navigating from pages
  useEffect(() => {
    const search = searchParams.get("primary_release_year");

    console.log(search);

    if (search) {
      console.log("bo");
      setValue(Number(search));
    } else {
      setValue(2024);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center w-[100%]">
        <p className="text-white text-lg">Release year</p>

        <button
          className="flex gap-1 text-gray-400"
          onClick={() => {
            setValue(2024);
            const params = new URLSearchParams(searchParams);
            params.delete("primary_release_year");
            replace(`${pathname}?${params.toString()}`);
            // if (selectedFilters.length === 0) return;
            // setSelectedFilters([]);
          }}
        >
          <XMarkIcon className="size-5" />

          <span className="text-sm">RESET</span>
        </button>
      </div>

      <input
        type="range"
        value={value}
        min={min}
        max={max}
        onChange={handleChange}
        onMouseUp={(e) => handleMouseUp(e.currentTarget.value)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />

      <div className="mt-2 text-center text-white text-sm">
        {label}: {value}
      </div>
    </div>
  );
};

export default RangeSlider;
