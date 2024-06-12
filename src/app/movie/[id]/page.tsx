import { fetchInstance } from "@/app/lib/fetch";
import BackdropImage from "./(components)/backdrop-image";
import { MovieDetailedType } from "@/app/lib/types";
import MovieInfo from "./(components)/movie-info";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const movieId = params.id;

  const movieData = await fetchInstance<MovieDetailedType>(`/movie/${movieId}`);

  if (!movieData) {
    notFound();
  }

  return (
    <div className="relative">
      <div
        className="h-[620px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(black, transparent)",
        }}
      >
        <BackdropImage
          backdropPath={movieData.backdrop_path ?? ""}
          alt={movieData.title ?? "N/A"}
        />
      </div>

      <MovieInfo movieId={movieId} movieData={movieData} />
    </div>
  );
};

export default Page;
