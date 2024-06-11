"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FilmIcon } from "@heroicons/react/24/solid";
import Dropdown from "../../dropdown/dropdown";
import Search from "../../inputs/search-input";
// import styles from "./header.module.css";
import { useFavoritesContext } from "@/app/lib/context/favorites-context";
import MovieListItem from "../../movie-item/movie-item";
import { EnumShowOn, MovieDetailedType } from "@/app/lib/types";
import MoviesSearch from "./components/movies-search";

const siteRoutes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/discovery",
    label: "Discovery",
  },
  {
    href: "/favorites",
    label: "Favorites",
  },
];

type HeaderProps = {
  className?: React.ComponentProps<"div">["className"];
};

const itemElement = (key: string, item: MovieDetailedType) => (
  <MovieListItem key={key} movie={item} />
);

const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();
  const { favoriteMovies } = useFavoritesContext();

  const isEmptyFavorites = favoriteMovies.length === 0;

  return (
    <header
      className={clsx(
        `sticky top-0 z-[100] flex justify-between items-center py-3 transparent h-[56px] ${className}`,
        {
          "mt-[-56px]": pathname === "/",
          "bg-main": pathname !== "/",
        }
      )}
    >
      <div className="flex w-full items-center gap-x-16">
        <div className="flex gap-1 items-center">
          <FilmIcon className="size-6 text-primary-100" />

          <Link href="/">
            <div className="text-primary-100 text-xl font-extrabold">
              MoviesApp
            </div>
          </Link>
        </div>

        <nav>
          <ul className="flex gap-x-10 text-[14px]">
            {siteRoutes.map((siteRoute) => {
              return (
                <li key={siteRoute.href} className="relative group">
                  <Link
                    href={siteRoute.href}
                    className={clsx("text-sm", {
                      "text-white": pathname === siteRoute.href,
                      "text-gray-400": pathname !== siteRoute.href,
                      "pointer-events-none": siteRoute.href === "/favorites",
                    })}
                  >
                    {siteRoute.label}
                  </Link>

                  {siteRoute.href === "/favorites" && (
                    <Dropdown
                      items={favoriteMovies}
                      showOn={EnumShowOn.hover}
                      className="top-[25px] w-[380px] h-[400px] transition-opacity duration-100 ease-in opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                      emptyStateLabel={
                        isEmptyFavorites
                          ? "You don't have any favorite movies yet!"
                          : null
                      }
                      itemElement={itemElement}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div>
        <MoviesSearch
          searchResults={(items) => {
            if (items.length > 0) {
              return (
                <Dropdown
                  items={items}
                  className="h-[450px]"
                  showOn={EnumShowOn.search}
                  itemElement={itemElement}
                />
              );
            }
          }}
        />
      </div>
    </header>
  );
};

export default Header;
