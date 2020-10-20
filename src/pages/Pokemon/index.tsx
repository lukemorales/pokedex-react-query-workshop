import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { IoMdArrowBack } from 'react-icons/io';

import * as S from './styles';
import { Pokemon } from './types';
import { POKEMON_TYPE_COLORS } from '../../constants';
import usePokemon from '../../hooks/usePokemon';

const PokemonPage = () => {
  const history = useHistory();
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const { isFetching, data } = usePokemon(pokemonId);

  const pokemon = data ?? ({} as Pokemon);

  return (
    <S.Container>
      <S.Main>
        <button type="button" onClick={() => history.push('/')}>
          <IoMdArrowBack color="#fff" />
        </button>
        {isFetching ? (
          <>
            <Skeleton
              circle
              width="12rem"
              height="12rem"
              style={{ marginTop: '2rem' }}
            />
            <S.PokeStats>
              <ul>
                <Skeleton width="6rem" style={{ marginTop: '1.6rem' }} />
              </ul>
              <Skeleton width="100%" count={6} />
            </S.PokeStats>
            <S.PokeFooter style={{ marginTop: '4.6rem' }}>
              <Skeleton width="20rem" />
            </S.PokeFooter>
          </>
        ) : (
          <>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <S.PokeStats>
              <ul>
                {pokemon.types.map(({ type }) => (
                  <li
                    key={type.name}
                    style={{ backgroundColor: POKEMON_TYPE_COLORS[type.name] }}
                  >
                    {type.name}
                  </li>
                ))}
              </ul>

              <table>
                <tbody>
                  {pokemon.stats.map((stat) => (
                    <tr key={stat.stat.name}>
                      <td>{stat.stat.name}</td>
                      <td>{stat.base_stat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </S.PokeStats>
            <S.PokeFooter
              color={POKEMON_TYPE_COLORS[pokemon.types[0].type.name]}
            >
              <h1>{pokemon.name}</h1>
            </S.PokeFooter>
          </>
        )}
      </S.Main>
    </S.Container>
  );
};

export default PokemonPage;
