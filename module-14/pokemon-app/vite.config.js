// vite.config.js
export default {
    server: {
      proxy: {
        '/new-pokemon': 'http://localhost:4000',
        '/update-pokemon': 'http://localhost:4000',
        '/delete-pokemon': 'http://localhost:4000',
       // '/': 'http://localhost:4000', // importante para o fetchPokemons()
      },
    },
  };
  