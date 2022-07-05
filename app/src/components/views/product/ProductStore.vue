<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Cadastro de Produto</h5>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">
            Nome
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticName"
              placeholder="Geladeira"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticDescription" class="col-sm-2 col-form-label"
            >Descrição
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="staticDescription"
              placeholder="Design arrojado"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticBrand" class="col-sm-2 col-form-label">
            Marca
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-4">
            <select
              id="staticBrand"
              class="form-select"
            >
              <option selected>Selecione uma Marca</option>
              <template v-if="brands">
                <option v-for="m in brands.data" :value="m.id" :key="m.id">{{ m.name }}</option>
              </template>
            </select>
          </div>
          <label for="staticSupplier" class="col-sm-2 col-form-label"
            >Fabricante
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-4">
            <select
              id="staticSupplier"
              class="form-select"
            >
              <option selected>Selecione um Fornecedor</option>
              <template v-if="suppliers">
                <option v-for="s in suppliers.data" :value="s.id" :key="s.id">{{ s.name }}</option>
              </template>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticFeatures" class="col-sm-2 col-form-label"
            >Características
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="staticFeatures"
              placeholder="Tensão: 220V"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticPrice" class="col-sm-2 col-form-label">
            Preço (R$)
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="staticPrice"
              placeholder="2.500,00"
            />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button class="form-control btn btn-light"
              @click="this.$router.push({ name: 'Product' })">
              <i class="bi bi-x-circle"></i>
              Cancelar
            </button>
          </div>
          <div class="col-sm-2">
            <button class="form-control btn btn-primary">
              <i class="bi bi-cloud-download"></i>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductStore",
  data: () => ({
    data: null,
    brands: null,
    suppliers: null
  }),
  methods: {
    listarFornecedores() {
      fetch('http://localhost:8000/api/supplier')
        .then(responseServer => responseServer.json())
        .then(response => {
          this.suppliers = response
        })
    },
    listarMarcas() {
      fetch('http://localhost:8000/api/brand')
        .then(responseServer => responseServer.json())
        .then(response => {
          this.brands = response
        })
    }
  },
  created() {
    this.listarFornecedores()
    this.listarMarcas()
  }
};
</script>

<style></style>
