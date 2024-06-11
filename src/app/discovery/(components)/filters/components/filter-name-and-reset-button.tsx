import { XMarkIcon } from "@heroicons/react/24/solid";

type FilterNameAndResetButtonProps = {
  filterName: string;
  onReset: () => void;
};

const FilterNameAndResetButton = ({
  filterName,
  onReset,
}: FilterNameAndResetButtonProps) => {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <p className="text-white text-lg">{filterName}</p>

      <button
        className="flex gap-1 text-gray-400"
        onClick={() => {
          onReset();
          // setDefaultValue(undefined);
          // setKey((prevKey) => prevKey + 1);
          // deleteQueryParams({
          //   queryKeyToDelete: "primary_release_year",
          //   withConvertEncodedCommas: true,
          // });
        }}
      >
        <XMarkIcon className="size-5" />

        <span className="text-sm">RESET</span>
      </button>
    </div>
  );
};

export default FilterNameAndResetButton;
