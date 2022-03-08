<template>
    <div class="o-details">
        <product-details v-if="selectedProduct" :selected-product="selectedProduct"></product-details>
    </div>
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';
import { mapGetters } from 'vuex';

export default {
    name: 'DetailsView',
    components: { ProductDetails },
    data() {
        return {
            selectedProduct: null,
        };
    },
    computed: {
        ...mapGetters(['getData', 'getProduct']),
    },
    async mounted() {
        if (!this.getData?.items?.length) {
            await this.$store.dispatch('fetchData').then(() => this.selectProduct());
        } else {
            this.selectProduct();
        }
    },
    methods: {
        selectProduct() {
            const productId = Number(this.$route.params.productId);
            this.selectedProduct = this.getProduct(productId);
        },
    },
};
</script>
