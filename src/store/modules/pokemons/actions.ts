/* eslint @typescript-eslint/no-inferrable-types: 0 */
import { createAction } from 'typesafe-actions';

import { POKEAPI_URL } from '../../../constants';
import { APIListResult } from './types';

export const getPokemonsRequest = createAction(
  '@pokemon/GET_POKEMONS_REQUEST',
  (url: string = POKEAPI_URL) => ({
    url,
  }),
)<{ url: string }>();

export const getPokemonsSuccess = createAction(
  '@pokemon/GET_POKEMONS_SUCCESS',
  (data: APIListResult) => data,
)<APIListResult>();

export const getPokemonsFailure = createAction(
  '@pokemon/GET_POKEMONS_FAILURE',
  () => null,
)<null>();
