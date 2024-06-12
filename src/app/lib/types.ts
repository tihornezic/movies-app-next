type BelongsToCollectionType = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type ProductionCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProductionCountries = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type MovieBaseType = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_languange: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetailedType = {
  belongs_to_collection: null | BelongsToCollectionType;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  origin_country: string[];
  production_companies: ProductionCompanies[];
  production_countries: ProductionCountries[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
} & Pick<
  MovieBaseType,
  | "adult"
  | "backdrop_path"
  | "id"
  | "original_languange"
  | "original_title"
  | "overview"
  | "popularity"
  | "poster_path"
  | "release_date"
  | "first_air_date"
  | "title"
  | "video"
  | "vote_average"
  | "vote_count"
  | "name"
>;

export type Movies = {
  page: number;
  results: MovieDetailedType[];
  total_pages: number;
  total_results: number;
};

export enum EnumTrigger {
  click,
  hover,
}

export enum EnumShowOn {
  hover,
  search,
}

export type Cast = {
  adult: boolean;
  gender: 1;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type Crew = {
  department: string;
  job: string;
} & Omit<Cast, "character" | "order">;

export type Credits = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};
