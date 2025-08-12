import axios from 'axios';

/**
 * Busca todos os livros (GET /books)
 */
export async function fetchBooks() {
  try {
    const response = await axios.get('/books');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    return []; // Evita quebra no .map() se der erro
  }
}
