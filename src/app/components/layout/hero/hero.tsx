"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./hero.module.css";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative w-[100%] h-[75vh]">
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

      <div className={`${styles["centered-content"]} flex items-center w-fit`}>
        <h1 className="my-4 text-4xl font-bold text-white">Check out movies</h1>

        <button
          type="button"
          onClick={() => router.push("/discover-movies")}
          className="h-10 w-fit px-4 text-sm font-bold text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200"
        >
          Discover Movies
        </button>
      </div>
    </div>
  );
};

export default Hero;
