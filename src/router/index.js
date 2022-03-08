import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '@/views/ProductsView.vue';
import DetailsView from '@/views/DetailsView';

const routes = [
    {
        path: '/',
        name: 'products',
        component: ProductsView,
    },
    {
        path: '/product-details/:productId',
        name: 'product-details',
        component: DetailsView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
