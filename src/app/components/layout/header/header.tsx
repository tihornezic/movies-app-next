"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FilmIcon } from "@heroicons/react/24/solid";
import HeaderDropdown from "./header-dropdown";
import Search from "../../search/search";
import styles from "./header.module.css";


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

const Header = ({ className }: HeaderProps) => {
  const pathname = usePathname();

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
                <li key={siteRoute.href} className={styles['header-item']}>
                  <Link
                    href={siteRoute.href}
                    className={clsx("text-sm", {
                      "text-white": pathname === siteRoute.href,
                      "text-gray-400": pathname !== siteRoute.href,
                    })}
                  >
                    {siteRoute.label}
                  </Link>

                  {siteRoute.href === "/favorites" && <HeaderDropdown />}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <Search className="" />
    </header>
  );
};

export default Header;
