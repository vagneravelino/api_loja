export default {
  data: () => ({
    data: {},
    suppliers: {},
  }),
  methods: {
    listarFornecedores(url) {
      fetch(url)
        .then((responseServer) => responseServer.json())
        .then((response) => {
          this.suppliers = response;
        });
    }
  },
};
