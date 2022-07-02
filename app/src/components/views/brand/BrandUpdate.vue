<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Editar Marca: {{ brands.id }}</h5>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticName"
              :value="brands.name"
              placeholder="Brastemp"
            />
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-sm-2">
            <button 
              @click="this.$router.push('/brand')"
              class="form-control btn btn-light">Cancelar</button>
          </div>
          <div class="col-sm-2">
            <button class="form-control btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import brandMixin from '@/mixins/brands'

export default {
    name: 'BrandUpdate',
    mixins: [
      brandMixin
    ],
    created() {
      this.getBrand(`http://localhost:8000/api/brand/${this.$route.params.id}`)
    }
}
</script>

<style>

</style>