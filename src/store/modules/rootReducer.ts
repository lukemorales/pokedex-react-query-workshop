import { combineReducers } from 'redux';

import { StoreState } from '../createStore';
import pokemons from './pokemons/reducer';

export default combineReducers<StoreState>({
  pokemons,
});
