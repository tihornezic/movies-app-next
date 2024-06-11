import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { convertEncodedCommas } from "../helpers";
import { Dispatch, SetStateAction } from "react";

type DeleteQueryParamsProps = {
  queryKeyToDelete: string;
  withConvertEncodedCommas?: boolean;
};

type BaseUseFiltersType<T> = {
  queryValue: T;
  queryKey: string;
};

type MultiFiltersTrue<T> = BaseUseFiltersType<T> & {
  multiFilters: true;
  onUpdatedFilters: Dispatch<SetStateAction<T[]>>;
  selectedFilters: T[];
};

type MultiFiltersFalse<T> = BaseUseFiltersType<T> & {
  multiFilters: false;
};

type FilterProps<T> = MultiFiltersTrue<T> | MultiFiltersFalse<T>;

const useFilters = <T>() => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams.toString());

  const convertEncodedCommasAndReplace = (params: URLSearchParams) => {
    const convertedUrl = convertEncodedCommas(params.toString());
    replace(`${pathname}?${convertedUrl}`);
  };

  const deleteQueryParams = ({
    queryKeyToDelete,
    withConvertEncodedCommas,
  }: DeleteQueryParamsProps) => {
    params.delete(queryKeyToDelete);

    const convertedEncodedCommas =
      withConvertEncodedCommas && convertEncodedCommas(params.toString());

    const queryString = convertedEncodedCommas || params.toString();
    replace(`${pathname}?${queryString}`);
  };

  const manipulateQueryParams = (props: FilterProps<T>) => {
    if (props.multiFilters) {
      const isSelected = props.selectedFilters.includes(props.queryValue);
      let updatedFilters: T[];

      if (isSelected) {
        updatedFilters = props.selectedFilters.filter(
          (item) => item !== props.queryValue
        );
      } else {
        updatedFilters = [...props.selectedFilters, props.queryValue];
      }

      props.onUpdatedFilters(updatedFilters);

      if (updatedFilters.length === 0) {
        params.delete(props.queryKey);
      } else {
        const commaSeparatedFilters = updatedFilters.join(",");
        params.set(props.queryKey, commaSeparatedFilters);
      }

      convertEncodedCommasAndReplace(params);
    } else {
      if (props.queryValue) {
        params.set(props.queryKey, props.queryValue.toString());
      } else {
        params.delete(props.queryKey);
      }

      convertEncodedCommasAndReplace(params);
    }
  };

  return { manipulateQueryParams, deleteQueryParams };
};

export default useFilters;
