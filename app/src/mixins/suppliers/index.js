export default {
  data: () => ({
    suppliers: {}
  }),
  methods: {
    getSupplier(url) {
      fetch(url)
        .then((responseServer) => responseServer.json())
        .then((response) => {
          this.suppliers = response.data;
        });
    },
  },
};
