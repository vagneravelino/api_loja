<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Editar Produto: {{ id }}</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">Nome</label>
          <div class="col-sm-10">
            <input
              v-model="getProducts.name"
              type="text"
              class="form-control"
              :class="error.name ? 'is-invalid' : ''"
              id="name"
              placeholder="Nome do Produto"
            />
            <div v-if="error.name" v-text="error.name[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="description" class="col-sm-2 col-form-label"
            >Descrição</label
          >
          <div class="col-sm-10">
            <textarea
              v-model="getProducts.description"
              class="form-control"
              :class="error.description ? 'is-invalid' : ''"
              id="description"
              placeholder="Insira uma descrição para o produto."
            ></textarea>
            <div v-if="error.description" v-text="error.description[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="brand_id" class="col-sm-2 col-form-label">
            Marca
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-4">
            <select
              id="brand_id"
              class="form-select"
              :class="error.brand_id ? 'is-invalid' : ''"
              v-model="getProducts.brand_id"
            >
              <option value="" selected>Selecione uma Marca</option>
              <template v-if="getBrands">
                <option v-for="m in getBrands" :value="m.id" :key="m.id">{{ m.name }}</option>
              </template>
            </select>
            <div v-if="error.brand_id" v-text="error.brand_id[0]" class="invalid-feedback"></div>
          </div>
          <label for="supplier_id" class="col-sm-2 col-form-label"
            >Fornecedor
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-4">
            <select
              id="supplier_id"
              class="form-select"
              :class="error.supplier_id ? 'is-invalid' : ''"
              v-model="getProducts.supplier_id"
            >
              <option value="" selected>Selecione um Fornecedor</option>
              <template v-if="getSuppliers">
                <option v-for="s in getSuppliers" :value="s.id" :key="s.id">{{ s.name }}</option>
              </template>
            </select>
            <div v-if="error.supplier_id" v-text="error.supplier_id[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="features" class="col-sm-2 col-form-label"
            >Características
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <textarea
              v-model="getProducts.features"
              class="form-control"
              :class="error.features ? 'is-invalid' : ''"
              id="features"
              placeholder="Insira as características do produto."
            ></textarea>
            <div v-if="error.features" v-text="error.features[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="mb-3 row">
          <label for="price" class="col-sm-2 col-form-label">
            Preço (R$)
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              v-model="getProducts.price"
              type="text"
              class="form-control"
              :class="error.price ? 'is-invalid' : ''"
              id="price"
              placeholder="Digite o valor do produto."
            />
            <div v-if="error.price" v-text="error.price[0]" class="invalid-feedback"></div>
          </div>
        </div>
        <div class="row justify-content-between">
          <div class="col-sm-2">
            <button
              class="form-control btn btn-light"
              @click="$router.push({ name: 'Product' })">
              <i class="bi bi-x-circle"></i>
              Cancelar
            </button>
          </div>
          <div class="col-sm-2">
            <button
              @click="updateProduct(id)"
              class="form-control btn btn-primary">
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
import productMixin from "@/mixins/products";
import brandMixin from "@/mixins/brands";
import supplierMixin from "@/mixins/suppliers";
import { uri } from '@/config'

export default {
  name: "ProductUpdate",
  props: {
    id: [String, Number]
  },
  mixins: [productMixin, brandMixin, supplierMixin],
  created() {
    this.getApiSuppliers(`${uri}/supplier`);
    this.getApiBrands(`${uri}/brand`);
    this.getApiProducts(`${uri}/product/${this.id}`);
  },
  beforeUnmount() {
    const error = {
            name: null,
            description: null,
            brand_id: '',
            supplier_id: '',
            features: null,
            price: null
        }
    this.setErrors(error)
  }
};
</script>
