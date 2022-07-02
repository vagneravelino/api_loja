<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Detalhes da Marca: {{ brands.id }}</h5>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control-plaintext"
              readonly
              id="staticName"
              :value="brands.name"
              placeholder="Brastemp"
            />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button 
              @click="this.$router.push({ name: 'Brand' })"
              class="form-control btn btn-light">
                <i class="bi bi-arrow-left-circle"></i>
                Voltar
            </button>
          </div>
          <div class="col-sm-2">
            <button 
              class="form-control btn btn-danger">
              <i class="bi bi-trash"></i>
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import brandMixin from '@/mixins/brands'

export default {
    name: 'BrandDetail',
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