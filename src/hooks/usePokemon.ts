import { useQuery } from 'react-query';

import { Pokemon } from '../pages/Pokemon/types';
import api from '../services/api';

type FetchPokemon = (key: string, pokemonId: string) => Promise<Pokemon>;

const fetchPokemon: FetchPokemon = async (_, pokemonId) => {
  const { data } = await api.get<Pokemon>(`/${pokemonId}`);
  return data;
};

const usePokemon = (pokemonId: string) =>
  useQuery(['pokemon', pokemonId], fetchPokemon, { staleTime: Infinity });

export default usePokemon;
