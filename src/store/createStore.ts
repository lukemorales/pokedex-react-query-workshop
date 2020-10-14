import { createStore, applyMiddleware, Middleware, Reducer } from 'redux';

import { PokemonAction, PokemonListState } from './modules/pokemons/types';

export interface StoreState {
  pokemons: PokemonListState;
}

export type StoreAction = PokemonAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
