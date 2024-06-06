"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Search from "../search";

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
      className={`sticky top-0 z-[100] flex justify-between items-center py-3 bg-main ${className}`}
    >
      <div className="flex w-full items-center gap-x-16">
        <Link href="/">
          <div className="text-primary text-xl font-normal">MoviesApp</div>
        </Link>

        <nav>
          <ul className="flex gap-x-10 text-[14px]">
            {siteRoutes.map((siteRoute) => (
              <li key={siteRoute.href}>
                <Link
                  href={siteRoute.href}
                  className={clsx("text-sm", {
                    "text-white": pathname === siteRoute.href,
                    "text-gray-400": pathname !== siteRoute.href,
                  })}
                >
                  {siteRoute.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <Search className="" />
    </header>
  );
};

export default Header;
