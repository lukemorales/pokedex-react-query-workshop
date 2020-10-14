import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { Pokemon } from './types';
import api from '../../services/api';
import { Container } from './styles';

const PokemonPage = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const { pokemonId } = useParams<{ pokemonId: string }>();

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

  if (loading) {
    return <h2>loading...</h2>;
  }

  return (
    <Container>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <ul>
        <li>Altura: {pokemon.height}</li>
        <li>Peso: {pokemon.weight}</li>
        <br />
        <ul>
          Status:
          {pokemon.stats.map((stat) => (
            <li>{`${stat.stat.name}: ${stat.base_stat}`}</li>
          ))}
        </ul>
        <br />
        <ul>
          Tipo:
          {pokemon.types.map(({ type }) => (
            <li>{type.name}</li>
          ))}
        </ul>

        <br />
        <ul>
          <li>
            {pokemon.abilities.map((ability) => (
              <li>{ability.ability.name}</li>
            ))}
          </li>
        </ul>
      </ul>
    </Container>
  );
};

export default PokemonPage;
