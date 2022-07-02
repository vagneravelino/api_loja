<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import supplierMixin from '@/mixins/suppliers'

export default {
  name: "Supplier",
  mixin: [
    supplierMixin
  ]
};
</script>

<style></style>
