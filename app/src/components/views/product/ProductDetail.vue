<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Detalhes do Produto: {{ id }}</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              v-model="getProducts.name"
              type="text"
              class="form-control-plaintext"
              readonly
              id="name"
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="description" class="col-sm-2 col-form-label"
            >Descrição</label
          >
          <div class="col-sm-10">
            <textarea
              v-model="getProducts.description"
              class="form-control-plaintext"
              readonly
              id="description"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="staticBrand" class="col-sm-2 col-form-label">Marca</label>
          <div class="col-sm-4">
            <select id="brand_id" v-model="getProducts.brand_id" class="form-select" disabled>
              <option selected>Selecione uma Marca</option>
              <option
                v-for="m in getBrands"
                :value="m.id"
                :key="m.id"
              >
                {{ m.name }}
              </option>
            </select>
          </div>
          <label for="supplier_id" class="col-sm-2 col-form-label"
            >Fornecedor</label
          >
          <div class="col-sm-4">
            <select id="supplier_id" v-model="getProducts.supplier_id" class="form-select" disabled>
              <option selected>Selecione um Fornecedor</option>
              <option
                v-for="s in getSuppliers"
                :value="s.id"
                :key="s.id"
              >
                {{ s.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="features" class="col-sm-2 col-form-label"
            >Características</label
          >
          <div class="col-sm-10">
            <textarea
              v-model="getProducts.features"
              class="form-control-plaintext"
              readonly
              id="features"
            ></textarea>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="price" class="col-sm-2 col-form-label"
            >Preço (R$)</label
          >
          <div class="col-sm-10">
            <input
              v-model="getProducts.price"
              type="text"
              class="form-control-plaintext"
              readonly
              id="price"
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
            <button
                @click="destroyProduct(id)"
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
import productMixin from "@/mixins/products";
import brandMixin from "@/mixins/brands";
import supplierMixin from "@/mixins/suppliers";
import { uri } from '@/config'

export default {
  name: "ProductDetail",
  props: {
    id: [String, Number]
  },
  mixins: [productMixin, brandMixin, supplierMixin],
  created() {
    this.getApiProducts(`${uri}/product/${this.id}`);
    this.getApiBrands(`${uri}/brand`);
    this.getApiSuppliers(`${uri}/supplier`);
  },
};
</script>
