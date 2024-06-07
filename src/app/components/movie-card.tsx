import Image from "next/image";
import Link from "next/link";
import { POSTER_URL_SMALL } from "../lib/constants";

type MovieCardProps = {
  id: number;
  posterPath: string;
  alt: string;
};

const MovieCard = ({ id, posterPath, alt }: MovieCardProps) => {
  return (
    <Link href={`/movie/${id}`}>
      <Image
        src={`${POSTER_URL_SMALL}/${posterPath}`}
        alt={alt}
        width={160}
        height={240}
        priority
      />
    </Link>
  );
};

export default MovieCard;
