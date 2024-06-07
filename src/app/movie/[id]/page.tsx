import { fetchInstance } from "@/app/lib/fetch";
import BackdropImage from "./(components)/backdrop-image";
import { MovieDetailedType } from "@/app/lib/types";
import MovieInfo from "./(components)/movie-info";

const Page = async ({ params }: { params: { id: string } }) => {
  const movieId = params.id;

  const movieData = await fetchInstance<MovieDetailedType>(`/movie/${movieId}`);

  console.log("data", movieData);

  const date = new Date(movieData.release_date);
  const year = date.getFullYear();

  return (
    <div className="relative">
      <div
        className="h-[620px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(black, transparent)",
        }}
      >
        <BackdropImage
          backdropPath={movieData.backdrop_path}
          alt={movieData.title}
        />
      </div>

      <MovieInfo
        title={movieData.title}
        genres={movieData.genres}
        posterPath={movieData.poster_path}
        year={year}
        overview={movieData.overview}
      />
    </div>
  );
};

export default Page;
