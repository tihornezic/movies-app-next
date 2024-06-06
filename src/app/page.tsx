import Image from "next/image";
import { fetchInstance } from "./lib/fetch";
import { Suspense } from "react";
import Carousel from "./components/carousel";
import CarouselWrapper from "./components/carousel-wrapper";

const Home = () => {
  // const data = await fetchInstance("/movie/now_playing");

  // console.log(data.results);

  return (
    <main>
      <h1 className="my-4 text-4xl font-bold text-white">Search movies</h1>

      {/* <Carousel array={data.results} /> */}

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Discover movies
      </button>

      <Suspense fallback={<p>loading...</p>}>
        <CarouselWrapper url="/movie/now_playing" />
      </Suspense>
    </main>
  );
};

export default Home;
