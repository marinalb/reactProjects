import React, { useState } from 'react';
import PokemonForm from './PokemonForm';
import { deletePokemon } from '../services/pokemonApi';

export default function PokemonCard({ pokemon, refresh }) {
  const [editing, setEditing] = useState(false);

  const handleDelete = async () => {
    await deletePokemon(pokemon._id);
    refresh();
  };

  return (
    <div className="pokemon-card">
      {editing ? (
        <PokemonForm
          mode="edit"
          initialData={pokemon}
          onClose={() => setEditing(false)}
          onSaved={() => {
            refresh();
            setEditing(false);
          }}
        />
      ) : (
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <p>Estágio: {pokemon.evolution}</p>
          <button onClick={() => setEditing(true)}>Alterar</button>
          <button onClick={handleDelete}>Remover</button>
        </>
      )}
    </div>
  );
}
