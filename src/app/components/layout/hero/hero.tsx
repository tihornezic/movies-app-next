"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative w-[100%] h-[80vh]">
      <div
        className="h-[100%] overflow-hidden"
        style={{
          maskImage: "linear-gradient(black, 30%, transparent)",
        }}
      >
        <Image
          src={"/blur-half.png"}
          alt="hero-img"
          width="0"
          height="0"
          sizes="100% 100%"
          className="w-[100%] h-[100%]"
        />
      </div>

      <div
        className={`${styles["centered-content"]} flex flex-col gap-10 items-center w-fit`}
      >
        <h1 className="text-7xl font-bold text-white max-w-[80%]">
          Your guide to discovering movies
        </h1>

        <p className="text-gray-400 text-lg">
          With movies app find new, popular & upcoming movies!
        </p>

        <button
          type="button"
          onClick={() => router.push("/discover-movies")}
          className="h-12 px-9 mb-2 text-md font-bold text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200"
        >
          Discover Movies
        </button>

        {/* <div className="flex justify-center items-center gap-12 mt-12">
          <Image
            src={"/popcorn.png"}
            alt="hero-img"
            width="0"
            height="0"
            sizes="3% 3%"
            className="w-[3%] h-[3%]"
          />

          <Image
            src={"/tickets.png"}
            alt="hero-img"
            width="0"
            height="0"
            sizes="5% 5%"
            className="w-[5%] h-[5%]"
          />

          <Image
            src={"/action.png"}
            alt="hero-img"
            width="0"
            height="0"
            sizes="4% 4%"
            className="w-[4%] h-[4%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
