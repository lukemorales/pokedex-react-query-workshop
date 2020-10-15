import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { IoMdArrowBack } from 'react-icons/io';

import { Pokemon } from './types';
import api from '../../services/api';
import * as S from './styles';
import { POKEMON_TYPE_COLORS } from '../../constants';

const PokemonPage = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const { pokemonId } = useParams<{ pokemonId: string }>();

  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`/${pokemonId}`);
        setPokemon(data);
      } catch (err) {
        console.log({ err });
      } finally {
        setLoading(false);
      }
    })();
  }, [pokemonId]);

  return (
    <S.Container>
      <S.Main>
        <button type="button" onClick={() => history.push('/')}>
          <IoMdArrowBack color="#fff" />
        </button>
        {loading ? (
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
                {pokemon.stats.map((stat) => (
                  <tr key={stat.stat.name}>
                    <td>{stat.stat.name}</td>
                    <td>{stat.base_stat}</td>
                  </tr>
                ))}
              </table>

              {/* <ul>
            <li>
              {pokemon.abilities.map(({ ability }) => (
                <li>{ability.name}</li>
              ))}
            </li>
          </ul> */}
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
