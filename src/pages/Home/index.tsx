import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import * as S from './styles';
import { PokemonLogo } from '../../assets/images';
import { POKEAPI_URL } from '../../constants';
import usePaginatedPokemons from '../../hooks/usePaginatedPokemon';
import { APIListResult } from '../../common/types';

const Home = () => {
  const [currentURL, setCurrentURL] = useState(POKEAPI_URL);
  const { isFetching, resolvedData } = usePaginatedPokemons(currentURL);

  const { count, next, previous, results: pokemons } =
    resolvedData ?? ({} as APIListResult);

  const setPreviousPage = () => previous && setCurrentURL(previous);
  const setNextPage = () => next && setCurrentURL(next);

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
          {isFetching
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
            : pokemons?.map((pokemon) => {
                const { url, name, image } = pokemon;

                const [, id] = url.split('pokemon/');

                return (
                  <S.PokeCard key={url}>
                    <Link to={`/pokemon/${id}`}>
                      <img src={image} alt={name} />
                      <span>{name}</span>
                    </Link>
                  </S.PokeCard>
                );
              })}
        </ul>
        <S.Navigation>
          <button type="button" onClick={setPreviousPage} disabled={!previous}>
            Previous
          </button>
          <button onClick={setNextPage} type="button" disabled={!next}>
            Next
          </button>
        </S.Navigation>
      </S.Main>
    </S.Container>
  );
};

export default Home;
