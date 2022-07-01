<template>
  <div>
    <topo />
    <conteudo />
    <rodape />
  </div>
</template>

<script>
import Conteudo from '@/components/layouts/Conteudo.vue'
import Rodape from '@/components/layouts/Rodape.vue'
import Topo from '@/components/layouts/Topo.vue'

export default {
  name: 'App',
  components: {
    Conteudo, Rodape, Topo
  }
}
</script>
  
<style>
  
</style>
