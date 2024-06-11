import { fetchInstance } from "@/app/lib/fetch";
import { Movies } from "@/app/lib/types";
import MovieCard from "../movie-card/movie-card";
import Carousel from "./carousel";

type CarouselWrapperProps = {
  url: string;
  title?: string;
  titleStyles?: React.ComponentProps<"div">["className"];
};

const CarouselWrapper = async ({
  url,
  title,
  titleStyles,
}: CarouselWrapperProps) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const moviesData = await fetchInstance<Movies>(url);

  const moviesCarouselArray = moviesData.results.map((item) => (
    <div key={item.id} className="pr-5">
      <MovieCard movieDetails={item} />
    </div>
  ));

  return (
    <div className="flex flex-col">
      {title && (
        <h3 className={`my-4 text-2xl font-bold text-white ${titleStyles}`}>
          {title}
        </h3>
      )}

      <Carousel carouselArray={moviesCarouselArray} />
    </div>
  );
};

export default CarouselWrapper;
