<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Cadastro de Produto</h5>
        <div class="mb-3 row">
          <label for="name" class="col-sm-2 col-form-label">
            Nome
            <span class="text-danger"> *</span>
          </label>
          <div class="col-sm-10">
            <input
              v-model="form_product.name"
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
            >Descrição
            <span class="text-danger"> *</span>
          </label
          >
          <div class="col-sm-10">
            <textarea
              v-model="form_product.description"
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
              v-model="form_product.brand_id"
            >
              <option value="">Selecione uma Marca</option>
              <template v-if="getBrands">
                <option v-for="b in getBrands" :value="b.id" :key="b.id">{{ b.name }}</option>
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
              v-model="form_product.supplier_id"
            >
              <option value="">Selecione um Fornecedor</option>
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
              v-model="form_product.features"
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
              v-model="form_product.price"
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
            <button class="form-control btn btn-light"
              @click="this.$router.push({ name: 'Product' })">
              <i class="bi bi-x-circle"></i>
              Cancelar
            </button>
          </div>
          <div class="col-sm-2">
            <button 
              @click="storeProduct()"
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
import productMixin from '@/mixins/products'
import brandMixin from "@/mixins/brands";
import supplierMixin from "@/mixins/suppliers";
import { uri } from '@/config'

export default {
  name: "ProductStore",
  mixins: [
    productMixin,
    brandMixin,
    supplierMixin
  ],
  created() {
    this.getApiBrands(`${uri}/brand`);
    this.getApiSuppliers(`${uri}/supplier`);
  },
  beforeUnmount() {
    const error = {
            name: '',
            description: '',
            brand_id: '',
            supplier_id: '',
            features: '',
            price: ''
        }
    this.setErrors(error)
  }
};
</script>
