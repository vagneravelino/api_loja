<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <div class="destaque">
          <h4 class="text-primary text-center">
            {{ name }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Home",
  computed: {
    ...mapState('store', ['name'])
  }
};
</script>

<style scoped>
.menu-superior {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 5%), inset 0 -1px 0 rgb(0 0 0 / 15%);
}
.destaque {
  padding: 60px 15px;
}
</style>
