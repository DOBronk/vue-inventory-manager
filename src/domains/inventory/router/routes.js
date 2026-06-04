import Main from '@/domains/inventory/views/Main.vue'
import AddProduct from '@/domains/inventory/views/AddProduct.vue'

export const routes = [{
    path: '/',
    name: 'home',
    component: Main
},{
    path: '/products/create',
    name: 'createProduct',
    component: AddProduct
}]