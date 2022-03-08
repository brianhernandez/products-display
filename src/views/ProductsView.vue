<template>
    <div class="o-products">
        <h1 class="o-products__heading">
            Curated products for you by {{ getData?.SalesRep?.FirstName }} {{ getData?.SalesRep?.LastName }} from
            {{ getData?.CompanyName }}.
        </h1>
        <div v-html="getData?.Message" class="o-products__message"></div>
        <div class="o-products__contact">
            <p>
                {{ getData?.SalesRep?.FirstName }} {{ getData?.SalesRep?.LastName }}, Email:
                <a :href="`mailto:${getData?.SalesRep?.EmailAddress}`" class="-hoverStyle">{{
                    getData?.SalesRep?.EmailAddress
                }}</a
                >, Phone:
                <a :href="`tel:${getData?.SalesRep?.CellPhone}`" class="-hoverStyle">{{ getData?.SalesRep?.Phone }}</a>
            </p>
        </div>
        <ProductsList :items="getData?.items" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductsList from '@/components/ProductsList.vue';

export default {
    name: 'ProductsView',
    components: {
        ProductsList,
    },
    computed: {
        ...mapGetters(['getData']),
    },
    async mounted() {
        if (!this.getData?.ManufacturerID) {
            await this.$store.dispatch('fetchData');
        }
    },
};
</script>

<style scoped lang="scss">
.o-products {
    &__contact {
        line-height: 2rem;
    }
}
</style>
