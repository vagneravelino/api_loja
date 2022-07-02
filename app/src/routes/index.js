import { createRouter, createWebHistory } from 'vue-router'

import Supplier from '@/components/views/supplier/Supplier.vue'
import SupplierList from '@/components/views/supplier/SupplierList.vue'
import SupplierStore from '@/components/views/supplier/SupplierStore.vue'

import Home from '@/components/views/main/Home.vue'

import Brand from '@/components/views/brand/Brand.vue'
import BrandDelete from '@/components/views/brand/BrandDelete.vue'
import BrandStore from '@/components/views/brand/BrandStore.vue'
import BrandUpdate from '@/components/views/brand/BrandUpdate.vue'
import BrandList from '@/components/views/brand/BrandList.vue'

import Product from '@/components/views/product/Product.vue'
import ProductStore from '@/components/views/product/ProductStore.vue'
import ProductDetail from '@/components/views/product/ProductDetail.vue'
import ProductList from '@/components/views/product/ProductList.vue'

import User from '@/components/views/user/User.vue'
import UserStore from '@/components/views/user/UserStore.vue'
import UserList from '@/components/views/user/UserList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/supplier',
        name: 'Supplier',
        component: Supplier,
        children: [
            { path: '', name: 'SupplierList', component: SupplierList },
            { path: 'store', name: 'SupplierStore', component: SupplierStore },
        ]
    },
    {
        path: '/brand',
        name: 'Brand',
        component: Brand,
        children: [
            { path: '', name: 'BrandList', component: BrandList },
            { path: 'store', name: 'BrandStore', component: BrandStore },
            { path: 'update', name: 'BrandUpdate', component: BrandUpdate },
            { path: 'delete', name: 'BrandDelete', component: BrandDelete },
        ]
    },
    {
        path: '/product',
        name: 'Product',
        component: Product,
        children: [
            { path: '', name: 'ProductList', component: ProductList },
            { path: ':id', name: 'ProductDetail', component: ProductDetail },
            { path: 'store', name: 'ProductStore', component: ProductStore },
        ]
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        children: [
            { path: '', name: 'UserList', component: UserList },
            { path: 'store', name: 'UserStore', component: UserStore },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router