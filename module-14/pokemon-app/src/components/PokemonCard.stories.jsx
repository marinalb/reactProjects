import React from 'react';
import PokemonCard from './PokemonCard';

// Mock function para o botão refresh
const mockRefresh = () => console.log('🔄 Refresh chamado');

export default {
  title: 'Components/PokemonCard',
  component: PokemonCard,
};

const mockPokemon = {
  _id: '123abc',
  name: 'Pikachu',
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  evolution: 2,
};

export const Default = () => (
  <PokemonCard pokemon={mockPokemon} refresh={mockRefresh} />
);
