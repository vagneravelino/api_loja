export default {
  data: () => ({
    users: {},
  }),
  methods: {
    getUser(url) {
      fetch(url)
        .then((serverResponse) => serverResponse.json())
        .then((response) => {
          this.users = response.data;
        });
    },
  },
};
