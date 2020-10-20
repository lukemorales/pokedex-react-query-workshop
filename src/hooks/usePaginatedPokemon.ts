import axios from 'axios';
import { usePaginatedQuery } from 'react-query';

import { APIListResult } from '../common/types';
import { getPokemonImage } from '../utils';

type FetchPaginatedPokemons = (
  key: string,
  url: string,
) => Promise<APIListResult>;

const fetchPaginatedPokemons: FetchPaginatedPokemons = async (_, url) => {
  const { data } = await axios.get<APIListResult>(url);

  const response = {
    ...data,
    results: data.results.map((pokemon) => ({
      ...pokemon,
      image: getPokemonImage(pokemon.name),
    })),
  };

  return response;
};

const usePaginatedPokemons = (url: string) =>
  usePaginatedQuery<APIListResult>(['pokemons', url], fetchPaginatedPokemons, {
    staleTime: Infinity,
  });

export default usePaginatedPokemons;
