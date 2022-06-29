<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MarketPlace msg="Sistema para Cadastro de Produtos"/>
</template>

<script>
import MarketPlace from './components/Market.vue'

export default {
  name: 'App',
  components: {
    MarketPlace
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
