export default {
  data: () => ({
    data: {},
    brands: {},
  }),
  methods: {
    listarMarcas(url) {
      fetch(url)
        .then((responseServer) => responseServer.json())
        .then((response) => {
          this.brands = response;
        });
    },
  },
};
