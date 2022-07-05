<template>
  <div>
    <Header />
    <Main />
    <BaseBoard />
  </div>
</template>

<script>
import BaseBoard from '@/components/layouts/BaseBoard.vue'
import Header from '@/components/layouts/Header.vue'
import Main from '@/components/layouts/Main.vue'

export default {
  name: 'App',
  components: {
    BaseBoard, Header, Main
  }
}
</script>
  
<style>
  @import '~vue-awesome-notifications/dist/styles/style.css'
</style>
