import { createRouter, createWebHistory } from 'vue-router'

import Fornecedor from '@/components/views/Fornecedor.vue'
import FornecedorCadastro from '@/components/views/FornecedorCadastro.vue'
import FornecedorLista from '@/components/views/FornecedorLista.vue'

import Home from '@/components/views/Home.vue'

import Marca from '@/components/views/Marca.vue'
import MarcaApagar from '@/components/views/MarcaApagar.vue'
import MarcaCadastro from '@/components/views/MarcaCadastro.vue'
import MarcaEditar from '@/components/views/MarcaEditar.vue'
import MarcaLista from '@/components/views/MarcaLista.vue'

import Produto from '@/components/views/Produto.vue'
import ProdutoCadastro from '@/components/views/ProdutoCadastro.vue'
import ProdutoLista from '@/components/views/ProdutoLista.vue'

import Usuario from '@/components/views/Usuario.vue'
import UsuarioCadastro from '@/components/views/UsuarioCadastro.vue'
import UsuarioLista from '@/components/views/UsuarioLista.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/fornecedor',
        name: 'Fornecedor',
        component: Fornecedor,
        children: [
            { path: '', name: 'FornecedorLista', component: FornecedorLista },
            { path: 'cadastro', name: 'FornecedorCadastro', component: FornecedorCadastro },
        ]
    },
    {
        path: '/marca',
        name: 'Marca',
        component: Marca,
        children: [
            { path: '', name: 'MarcaLista', component: MarcaLista },
            { path: 'cadastro', name: 'MarcaCadastro', component: MarcaCadastro },
            { path: 'editar', name: 'MarcaEditar', component: MarcaEditar },
            { path: 'deletar', name: 'MarcaApagar', component: MarcaApagar },
        ]
    },
    {
        path: '/produto',
        name: 'Produto',
        component: Produto,
        children: [
            { path: '', name: 'ProdutoLista', component: ProdutoLista },
            { path: 'cadastro', name: 'ProdutoCadastro', component: ProdutoCadastro },
        ]
    },
    {
        path: '/usuario',
        name: 'Usuario',
        component: Usuario,
        children: [
            { path: '', name: 'UsuarioLista', component: UsuarioLista },
            { path: 'cadastro', name: 'Usuariocadastro', component: UsuarioCadastro },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router