export default {
  data: () => ({
    brands: {},
  }),
  methods: {
    getBrand(url) {
      fetch(url)
        .then((responseServer) => responseServer.json())
        .then((response) => {
          this.brands = response.data;
        });
    },
  },
};
