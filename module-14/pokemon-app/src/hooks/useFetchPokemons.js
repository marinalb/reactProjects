import { useEffect, useState } from 'react';
import { fetchPokemons } from '../services/pokemonApi';

export function useFetchPokemons(trigger) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await fetchPokemons();
        setPokemons(data);
      } catch (error) {
        console.error('Erro ao carregar Pokémons:', error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [trigger]);

  return { pokemons, loading };
}
