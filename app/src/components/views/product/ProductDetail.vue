<template>
  <div class="container">
    <div class="card mt-3">
      <!-- <img src="../../assets/images/usuarios.jpg" class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <h5 class="card-title">Detalhes do Produto: {{ $route.params.id }}</h5>
        <div class="mb-3 row">
          <label for="staticName" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control-plaintext"
              readonly
              id="staticName"
              :value="products.name"
              placeholder="Geladeira"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticDescription" class="col-sm-2 col-form-label"
            >Descrição</label
          >
          <div class="col-sm-10">
            <textarea
              class="form-control-plaintext"
              readonly
              id="staticDescription"
              :value="products.description"
              placeholder="Design arrojado"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticBrand" class="col-sm-2 col-form-label">Marca</label>
          <div class="col-sm-4">
            <select id="staticBrand" class="form-select" disabled>
              <option selected>Selecione uma Marca</option>
              <option
                v-for="m in brands"
                :selected="m.id == products.brand_id"
                :value="m.id"
                :key="m.id"
              >
                {{ m.name }}
              </option>
            </select>
          </div>
          <label for="staticSupplier" class="col-sm-2 col-form-label"
            >Fabricante</label
          >
          <div class="col-sm-4">
            <select id="staticSupplier" class="form-select" disabled>
              <option selected>Selecione um Fornecedor</option>
              <option
                v-for="s in suppliers"
                :selected="s.id == products.supplier_id"
                :value="s.id"
                :key="s.id"
              >
                {{ s.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticFeatures" class="col-sm-2 col-form-label"
            >Características</label
          >
          <div class="col-sm-10">
            <textarea
              class="form-control-plaintext"
              readonly
              id="staticFeatures"
              :value="products.features"
              placeholder="Tensão: 220V"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticPrice" class="col-sm-2 col-form-label"
            >Preço (R$)</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control-plaintext"
              readonly
              id="staticPrice"
              :value="products.price"
              placeholder="2.500,00"
            />
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button
              class="form-control btn btn-light"
              @click="this.$router.push({ name: 'Product' })"
            >
              <i class="bi bi-arrow-left-circle"></i>
              Voltar
            </button>
          </div>
          <div class="col-sm-2">
            <button class="form-control btn btn-danger">
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
import productMixin from "@/mixins/products";
import brandMixin from "@/mixins/brands";
import supplierMixin from "@/mixins/suppliers";

export default {
  name: "ProductDetail",
  mixins: [productMixin, brandMixin, supplierMixin],
  created() {
    this.getProduct(
      `http://localhost:8000/api/product/${this.$route.params.id}`
    );
    this.getBrand(`http://localhost:8000/api/brand`);
    this.getSupplier(`http://localhost:8000/api/supplier`);
  },
};
</script>

<style></style>
