<template>
  <nav class="navbar navbar-light bg-light menu-superior">
    <div class="container">
      <a class="navbar-brand" href="/">{{ title }}</a>
      <div class="navbar-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Acessar</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Header",
  computed: {
    ...mapState('store', ['title'])
  }
};
</script>

<style></style>
