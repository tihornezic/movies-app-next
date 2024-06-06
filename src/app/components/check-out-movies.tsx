"use client";

import { useRouter } from "next/navigation";

const CheckOutMovies = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <h1 className="my-4 text-4xl font-bold text-white">Check out movies</h1>

      <button
        type="button"
        onClick={() => router.push("/discover-movies")}
        className="h-10 w-fit px-4 text-sm font-bold text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200"
      >
        Discover Movies
      </button>
    </div>
  );
};

export default CheckOutMovies;
