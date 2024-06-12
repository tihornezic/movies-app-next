import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./hero.module.css";
import Link from "next/link";

const Hero = () => {
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
        <h1 className="text-5xl sm:text-7xl font-bold text-white max-w-[80%]">
          Your guide to discovering movies
        </h1>

        <p className="text-gray-400 text-lg">
          With movies app find new, popular & upcoming movies!
        </p>

        <Link href="/discovery">
          <button
            type="button"
            className="h-12 px-9 mb-2 text-md font-bold text-main transition-colors duration-150 bg-primary-100 rounded-lg focus:shadow-outline hover:bg-primary-200"
          >
            Discover Movies
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
