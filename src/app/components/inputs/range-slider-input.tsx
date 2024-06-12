"use client";

import { ChangeEvent, useEffect, useState } from "react";

type RangeSliderProps = {
  min: number;
  max: number;
  defaultValue?: string;
  label: string;
  handleMouseUp: (e: string) => void;
};

const RangeSlider = ({
  min = 0,
  max = 100,
  defaultValue,
  label,
  handleMouseUp,
}: RangeSliderProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (defaultValue) setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
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
        {label}: {value ?? "Not selected."}
      </div>
    </div>
  );
};

export default RangeSlider;
