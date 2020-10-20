export type PokemonLink = {
  name: string;
  url: string;
  image: string;
};

export type APIListResult = {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonLink[];
};
