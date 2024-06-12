import { useState } from "react";
import Link from "next/link";
import { useFavoritesContext } from "@/app/lib/context/favorites-context";
import MovieItem from "@/app/components/movie-item/movie-item";
import MoviesSearch from "./movies-search";
import Dropdown from "@/app/components/dropdown/dropdown";
import { EnumShowOn } from "@/app/lib/types";

type HamburgerMenu = {
  className?: React.ComponentProps<"div">["className"];
};

const HamburgerMenu = ({ className }: HamburgerMenu) => {
  const { favoriteMovies } = useFavoritesContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`text-white focus:outline-none lg:hidden ${className}`}
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="flex flex-col w-[240px] md:w-[70%] gap-20">
            <MoviesSearch
              searchResults={(items) => {
                if (items.length > 0) {
                  return (
                    <Dropdown
                      items={items}
                      className="h-[450px]"
                      showOn={EnumShowOn.search}
                      itemElement={(key, item) => (
                        <MovieItem
                          key={item.id}
                          movie={item}
                          onClick={toggleMenu}
                          className="w-[100%]"
                        />
                      )}
                    />
                  );
                }
              }}
            />

            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white text-2xl"
                onClick={toggleMenu}
              >
                HOME
              </Link>

              <Link
                href="/discovery"
                className="text-white text-2xl"
                onClick={toggleMenu}
              >
                DISCOVERY
              </Link>

              <div>
                <span className="text-2xl text-gray-400">FAVORITES:</span>

                <div className="flex overflow-x-auto py-4 px-1 gap-4">
                  {favoriteMovies.map((item) => {
                    return (
                      <MovieItem
                        key={item.id}
                        movie={item}
                        onClick={toggleMenu}
                        className="w-[250px] h-[100%] bg-main"
                      />
                    );
                  })}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
