<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">Lista de Marcas</h5>
        <div class="row justify-content-end">
          <div class="col-md-2">
            <button
              class="btn btn-sm btn-primary"
              @click="this.$router.push({ name: 'BrandStore' })"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Cadastrar Nova Marca"
            >
              <i class="bi bi-plus"></i>
              Nova Marca
            </button>
          </div>
        </div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th width="150px">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in this.getBrands" :key="m.id">
              <td>{{ m.name }}</td>
              <td>
                <button
                  class="btn btn-sm btn-outline-warning me-2"
                  @click="this.$router.push({ name: 'BrandDetail', params: { id: m.id }, props: { id: m.id } })"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Informação da Marca"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                >
                  <i class="bi bi-file-text"></i>
                </button>
                <button
                  class="btn btn-sm btn-outline-success me-2"
                  @click="this.$router.push({ name: 'BrandUpdate', params: { id: m.id }, props: { id: m.id } })"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Editar Marca"
                  style="
                    --bs-btn-padding-y: 0.25rem;
                    --bs-btn-padding-x: 0.5rem;
                    --bs-btn-font-size: 0.75rem;
                  "
                >
                  <i class="bi bi-pencil"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import brandMixin from "@/mixins/brands";
import { uri } from '@/config'

export default {
  name: "BrandList",
  mixins: [brandMixin],
  created() {
    this.getApiBrands(`${uri}/brand`)
  },
};
</script>
