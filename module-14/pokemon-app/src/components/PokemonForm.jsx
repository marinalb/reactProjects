import React, { useState } from 'react';
import { createPokemon, updatePokemon } from '../services/pokemonApi';

export default function PokemonForm({ mode = 'create', initialData = {}, onSaved, onClose }) {
  const [name, setName] = useState(initialData.name || '');
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || '');
  const [evolution, setEvolution] = useState(initialData.evolution || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pokemonData = { name, imageUrl, evolution };

    if (mode === 'edit') {
      await updatePokemon(initialData._id, pokemonData);
    } else {
      await createPokemon(pokemonData);
    }

    if (onSaved) onSaved();
  };

  return (
    <form className="pokemon-form" onSubmit={handleSubmit}>
      <label>
        Nome:
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        URL da imagem:
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      </label>
      <label>
        Estágio:
        <input
          type="number"
          value={evolution}
          onChange={(e) => setEvolution(e.target.value)}
        />
      </label>
      <button type="submit">{mode === 'edit' ? 'Salvar' : 'Criar'}</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </form>
  );
}
