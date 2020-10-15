import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import { StoreState } from '../../store/createStore';
import { getPokemonsRequest } from '../../store/modules/pokemons/actions';
import { getPokemonImage } from '../../utils';
import * as S from './styles';
import { PokemonLogo } from '../../assets/images';

const Home = () => {
  const dispatch = useDispatch();

  const { loading, pokemons, count, next, previous } = useSelector(
    (state: StoreState) => state.pokemons,
  );

  const getPreviousPokemons = () => dispatch(getPokemonsRequest(previous));
  const getNextPokemons = () => dispatch(getPokemonsRequest(next));

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(getPokemonsRequest());
    }
  }, [dispatch, pokemons.length]);

  return (
    <S.Container>
      <S.Header>
        <h1>
          <PokemonLogo />
        </h1>
        <span>{count} Pokémons</span>
      </S.Header>
      <S.Main>
        <ul>
          {loading
            ? Array.from(Array(16).keys()).map((key) => {
                return (
                  <S.PokeCard key={`skeleton-${key}`}>
                    <div>
                      <Skeleton circle height={80} width={80} />
                      <Skeleton width={60} />
                    </div>
                  </S.PokeCard>
                );
              })
            : pokemons.map((pokemon) => {
                const { url, name } = pokemon;

                const [, id] = url.split('pokemon/');

                return (
                  <S.PokeCard key={url}>
                    <Link to={`/pokemon/${id}`}>
                      <img src={getPokemonImage(name)} alt={name} />
                      <span>{name}</span>
                    </Link>
                  </S.PokeCard>
                );
              })}
        </ul>
        <S.Navigation>
          <button
            type="button"
            onClick={getPreviousPokemons}
            disabled={!previous}
          >
            Previous
          </button>
          <button onClick={getNextPokemons} type="button" disabled={!next}>
            Next
          </button>
        </S.Navigation>
      </S.Main>
    </S.Container>
  );
};

export default Home;
