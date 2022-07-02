export default {
  data: () => ({
    data: {},
  }),
  methods: {
    listarProdutos(url) {
      fetch(url)
        .then((responseServer) => responseServer.json())
        .then((response) => {
          this.data = response.data;
        });
    },
  },
};
