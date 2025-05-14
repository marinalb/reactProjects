import axios from 'axios';

const API_BASE_URL = ''; // proxy lida com o redirecionamento

// GET: busca todos os pokémons
export async function fetchPokemons() {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data.pokemons || []; // garante que seja sempre array
  } catch (error) {
    console.error('Erro ao buscar Pokémons:', error);
    return [];
  }
}

// POST: cria um novo Pokémon
export async function createPokemon(pokemon) {
  try {
    const payload = {
      name: pokemon.name,
      imageUrl: pokemon.imageUrl,
      evolution: Number(pokemon.evolution),
    };

    const response = await axios.post(`${API_BASE_URL}/new-pokemon`, payload);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar Pokémon:', error);
    throw error;
  }
}

// PUT: atualiza Pokémon existente
export async function updatePokemon(id, pokemon) {
  try {
    const payload = {
      name: pokemon.name,
      imageUrl: pokemon.imageUrl,
      evolution: Number(pokemon.evolution),
    };

    const response = await axios.put(`${API_BASE_URL}/update-pokemon/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar Pokémon:', error);
    throw error;
  }
}

// DELETE: remove um Pokémon
export async function deletePokemon(id) {
  try {
    const response = await axios.delete(`${API_BASE_URL}/delete-pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar Pokémon:', error);
    throw error;
  }
}
