export default {
  server: {
    proxy: {
      '/books': 'http://localhost:3000'
    }
  }
};
