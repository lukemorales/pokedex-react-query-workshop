import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { StoreState } from '../../store/createStore';
import { getPokemonsRequest } from '../../store/modules/pokemons/actions';
import { getPokemonImage } from '../../utils';
import { Container } from './styles';

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

  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      <header>
        <h1>Pokedex</h1>
        <span>{count} pokemons</span>
      </header>
      <ul>
        {pokemons.map((pokemon) => {
          const { url, name } = pokemon;

          const [, id] = url.split('pokemon/');

          return (
            <li key={url} data-api-url={url}>
              <img src={getPokemonImage(name)} alt={name} />
              <Link to={`/pokemon/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <footer>
        <nav>
          <button
            onClick={getPreviousPokemons}
            type="button"
            disabled={!previous}
          >
            Anterior
          </button>
          <button onClick={getNextPokemons} type="button" disabled={!next}>
            Próxima
          </button>
        </nav>
      </footer>
    </>
  );
};

export default Home;
