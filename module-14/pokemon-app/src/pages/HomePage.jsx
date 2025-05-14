import React, { useEffect, useState } from 'react';
import { fetchPokemons } from '../services/pokemonApi';
import PokemonCard from '../components/PokemonCard';
import PokemonForm from '../components/PokemonForm';

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getAllPokemons = async () => {
    const data = await fetchPokemons();
    setPokemonList(data);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémons</h1>

      <button onClick={() => setShowForm(true)}>Adicionar Pokémon</button>

      {showForm && (
        <PokemonForm
          mode="create"
          onSaved={() => {
            getAllPokemons();
            setShowForm(false);
          }}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="pokemon-grid">
        {pokemonList.map((p) => (
          <PokemonCard key={p._id || p.id} pokemon={p} refresh={getAllPokemons} />
        ))}
      </div>
    </div>
  );
}
