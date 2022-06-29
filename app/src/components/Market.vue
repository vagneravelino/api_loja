<template>
  <div class="market">
      <h1>{{ msg }}</h1>
      <p>
          Projeto para cadastro de produtos para loja virtual.<br>
          Esta aplicação consumirá recursos de uma API Rest.
      </p>
      <p>
      Desenvolvido por:
      <a href="https://github.com/vagneravelino" target="_blank" rel="noopener">Vagner Aveino</a>.
    </p>
  </div>
</template>

<script>
export default {
    name: 'MarketPlace',
    props: {
        msg: String
    }
}

</script>

<style scoped>

</style>