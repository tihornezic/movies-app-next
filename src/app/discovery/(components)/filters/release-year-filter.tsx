"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import useFilters from "@/app/lib/hooks/useFilters";
import RangeSliderInput from "../../../components/inputs/range-slider-input";
import FilterNameAndResetButton from "./components/filter-name-and-reset-button";

type ReleaseYearFilterProps = {
  min: number;
  max: number;
  label: string;
};

const ReleaseYearFilter = ({ ...props }: ReleaseYearFilterProps) => {
  const searchParams = useSearchParams();
  const { manipulateQueryParams, deleteQueryParams } = useFilters();
  const [defaultValue, setDefaultValue] = useState<string | undefined>(
    undefined
  );
  const [key, setKey] = useState(0);

  const handleMouseUp = (value: string) => {
    manipulateQueryParams({
      multiFilters: false,
      queryValue: value,
      queryKey: "primary_release_year",
    });
  };

  // populate selectedFilters on render when refreshing/navigating from pages
  useEffect(() => {
    const search = searchParams.get("primary_release_year");

    console.log(search);

    if (search) {
      setDefaultValue(search);
    } else {
      setDefaultValue(undefined);
    }
  }, []);

  return (
    <div className="w-full">
      <FilterNameAndResetButton
        filterName="Release year"
        onReset={() => {
          setDefaultValue(undefined);
          setKey((prevKey) => prevKey + 1);

          deleteQueryParams({
            queryKeyToDelete: "primary_release_year",
            withConvertEncodedCommas: true,
          });
        }}
      />

      <RangeSliderInput
        key={key}
        handleMouseUp={handleMouseUp}
        defaultValue={defaultValue}
        {...props}
      />
    </div>
  );
};

export default ReleaseYearFilter;
