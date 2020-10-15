import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type PokemonAction = ActionType<typeof actions>;

export type PokemonLink = {
  name: string;
  url: string;
};

export interface PokemonListState {
  readonly loading: boolean;
  readonly count: number;
  readonly next: string;
  readonly previous: string | undefined;
  readonly pokemons: PokemonLink[];
}

export type APIListResult = {
  count: number;
  next: string;
  previous: string | undefined;
  results: PokemonLink[];
};
