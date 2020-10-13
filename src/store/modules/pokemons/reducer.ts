import produce from 'immer';
import { getType } from 'typesafe-actions';

import {
  getPokemonsFailure,
  getPokemonsRequest,
  getPokemonsSuccess,
} from './actions';
import { PokemonAction, PokemonListState } from './types';

const initialState: PokemonListState = {
  loading: true,
  count: 0,
  next: '',
  previous: '',
  pokemons: [],
};

const pokemons = (state = initialState, action: PokemonAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(getPokemonsRequest):
        draft.loading = true;
        break;
      case getType(getPokemonsSuccess): {
        const { count, next, previous, results } = action.payload;

        draft.loading = false;
        draft.count = count;
        draft.next = next;
        draft.previous = previous;
        draft.pokemons = results;
        break;
      }
      case getType(getPokemonsFailure):
        draft.loading = false;
        break;
      default:
    }

    return draft;
  });

export default pokemons;
