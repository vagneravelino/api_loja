import { createRouter, createWebHistory } from 'vue-router'

const Supplier = () => import(/* webpackChunkName: 'suppliers' */ '@/components/views/supplier/Supplier.vue')
const SupplierDetail = () => import(/* webpackChunkName: 'suppliers' */ '@/components/views/supplier/SupplierDetail.vue')
const SupplierList = () => import(/* webpackChunkName: 'suppliers'*/ '@/components/views/supplier/SupplierList.vue')
const SupplierStore = () =>  import(/* webpackChunkName: 'suppliers'*/ '@/components/views/supplier/SupplierStore.vue')
const SupplierUpdate = () =>  import(/* webpackChinkName: 'suppliers'*/ '@/components/views/supplier/SupplierUpdate.vue')

import Home from '@/components/views/main/Home.vue'

const Brand = () => import(/* webpackChunkName: 'brands' */ '@/components/views/brand/Brand.vue')
const BrandDetail = () => import(/* webpackChunkName: 'brands' */ '@/components/views/brand/BrandDetail.vue')
const BrandStore = () => import(/* webpackChunkName: 'brands' */ '@/components/views/brand/BrandStore.vue')
const BrandUpdate =() => import(/* webpackChunkName: 'brands' */ '@/components/views/brand/BrandUpdate.vue')
const BrandList = () => import(/* webpackChnkName: 'brands' */'@/components/views/brand/BrandList.vue')

const Product = () => import(/* webpackChunkName: 'products' */ '@/components/views/product/Product.vue')
const ProductDetail = () => import(/* webpackChunkName: 'products' */ '@/components/views/product/ProductDetail.vue')
const ProductList = () =>  import(/* webpackChunkName: 'products' */ '@/components/views/product/ProductList.vue')
const ProductStore = () => import(/* webpackChunkName: 'products' */ '@/components/views/product/ProductStore.vue')
const ProductUpdate = () => import(/* webpackChunkName: 'products' */ '@/components/views/product/ProductUpdate.vue')

const User = () => import(/* webpackChunkName: 'users' */ '@/components/views/user/User.vue')
const UserDetail = () => import(/* webpackChunkName: 'users' */ '@/components/views/user/UserDetail.vue')
const UserStore = () => import(/* webpackChunkName: 'users' */ '@/components/views/user/UserStore.vue')
const UserUpdate = () => import(/* webpackChunkName: 'users' */ '@/components/views/user/UserUpdate.vue')
const UserList = () => import(/* webpackChunkName: 'users' */ '@/components/views/user/UserList.vue')

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
            { path: ':id', name: 'BrandDetail', props: true, component: BrandDetail },
            { path: 'store', name: 'BrandStore', component: BrandStore },
            { path: 'update/:id', name: 'BrandUpdate', props: true, component: BrandUpdate },
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
    {
        path: '/:catchAll(.*)*', redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router