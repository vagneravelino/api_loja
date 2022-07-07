export default {
  data: () => ({
    products: {},
  }),
  methods: {
    getProduct(url) {
      fetch(url)
        .then((responseServer) => responseServer.json())
        .then((response) => {
          this.products = response.data;
        });
    },
  },
};
