import { createAction } from 'typesafe-actions';

import { APIListResult } from './types';

export const getPokemonsRequest = createAction(
  '@pokemon/GET_POKEMONS_REQUEST',
  (offset: number) => ({
    offset,
  }),
)<{ offset: number }>();

export const getPokemonsSuccess = createAction(
  '@pokemon/GET_POKEMONS_SUCCESS',
  (data: APIListResult) => data,
)<APIListResult>();

export const getPokemonsFailure = createAction(
  '@pokemon/GET_POKEMONS_FAILURE',
  () => null,
)<null>();
