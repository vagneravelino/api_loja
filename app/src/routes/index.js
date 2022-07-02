import { createRouter, createWebHistory } from 'vue-router'

import Supplier from '@/components/views/supplier/Supplier.vue'
import SupplierDetail from '@/components/views/supplier/SupplierDetail.vue'
import SupplierList from '@/components/views/supplier/SupplierList.vue'
import SupplierStore from '@/components/views/supplier/SupplierStore.vue'
import SupplierUpdate from '@/components/views/supplier/SupplierUpdate.vue'

import Home from '@/components/views/main/Home.vue'

import Brand from '@/components/views/brand/Brand.vue'
import BrandDetail from '@/components/views/brand/BrandDetail.vue'
import BrandStore from '@/components/views/brand/BrandStore.vue'
import BrandUpdate from '@/components/views/brand/BrandUpdate.vue'
import BrandList from '@/components/views/brand/BrandList.vue'

import Product from '@/components/views/product/Product.vue'
import ProductDetail from '@/components/views/product/ProductDetail.vue'
import ProductList from '@/components/views/product/ProductList.vue'
import ProductStore from '@/components/views/product/ProductStore.vue'
import ProductUpdate from '@/components/views/product/ProductUpdate.vue'

import User from '@/components/views/user/User.vue'
import UserDetail from '@/components/views/user/UserDetail.vue'
import UserStore from '@/components/views/user/UserStore.vue'
import UserUpdate from '@/components/views/user/UserUpdate.vue'
import UserList from '@/components/views/user/UserList.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/supplier',
        component: Supplier,
        children: [
            { path: '', name: 'Supplier', component: SupplierList },
            { path: ':id', name: 'SupplierDetail', component: SupplierDetail },
            { path: 'store', name: 'SupplierStore', component: SupplierStore },
            { path: 'update/:id', name: 'SupplierUpdate', component: SupplierUpdate },
        ]
    },
    {
        path: '/brand',
        component: Brand,
        children: [
            { path: '', name: 'Brand', component: BrandList },
            { path: ':id', name: 'BrandDetail', component: BrandDetail },
            { path: 'store', name: 'BrandStore', component: BrandStore },
            { path: 'update/:id', name: 'BrandUpdate', component: BrandUpdate },
        ]
    },
    {
        path: '/product',
        component: Product,
        children: [
            { path: '', name: 'Product', component: ProductList },
            { path: ':id', name: 'ProductDetail', component: ProductDetail },
            { path: 'store', name: 'ProductStore', component: ProductStore },
            { path: 'update/:id', name: 'ProductUpdate', component: ProductUpdate },
        ]
    },
    {
        path: '/user',
        component: User,
        children: [
            { path: '', name: 'User', component: UserList },
            { path: ':id', name: 'UserDetail', component: UserDetail },
            { path: 'store', name: 'UserStore', component: UserStore },
            { path: 'update/:id', name: 'UserUpdate', component: UserUpdate },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router