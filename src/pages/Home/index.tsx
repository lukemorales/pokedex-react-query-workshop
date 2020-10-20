import React from 'react';

import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import * as S from './styles';
import { PokemonLogo } from '../../assets/images';
import usePaginatedPokemons from '../../hooks/usePaginatedPokemons';
import { APIListResult } from '../../common/types';
import usePokedex from '../../contexts/pokedex';

const Home = () => {
  const { currentUrl: currentPokedexUrl, setPokedexPage } = usePokedex();
  const { isFetching, resolvedData } = usePaginatedPokemons(currentPokedexUrl);

  const { count, next, previous, results: pokemons } =
    resolvedData ?? ({} as APIListResult);

  const setPreviousPage = () => previous && setPokedexPage(previous);
  const setNextPage = () => next && setPokedexPage(next);

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
