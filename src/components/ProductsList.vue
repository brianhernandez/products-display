<template>
    <ul class="m-products-list">
        <li v-for="item in items" :key="item.ProductID" class="m-products-list__item">
            <router-link
                :to="`/product-details/${item.ProductID}`"
                class="m-products-list__link"
                @click="scrollToTop()"
            >
                <picture class="m-products-list__image">
                    <source media="(max-width: 576px)" :srcset="`${item.PhotoName}?width=200`" />
                    <source media="(max-width: 768px)" :srcset="`${item.PhotoName}?width=250`" />
                    <source media="(max-width: 1200px)" :srcset="`${item.PhotoName}?width=300`" />
                    <img :src="`${item.PhotoName}?width=300`" :alt="item.Description" />
                </picture>
                <p class="m-products-list__price">{{ priceInCurrency(item.BasePrice) }}</p>
                <p class="m-products-list__name">{{ item.ItemName }}</p>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ProductsList',
    props: {
        items: {
            type: Array,
        },
    },
    methods: {
        priceInCurrency(price) {
            let stringPrice = price.toString();
            stringPrice = stringPrice.split('.')[0];
            return '$' + stringPrice;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

.m-products-list {
    align-items: stretch;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    min-height: 300px;
    padding: 0;

    @include media-breakpoint-up(md) {
        padding: 0 2rem;
    }

    @include media-breakpoint-up(lg) {
        justify-content: space-around;
    }

    &__item {
        align-self: stretch;
        border-radius: 10px;
        list-style: none;
        margin: 1rem 1rem 2rem;
        transition: box-shadow 0.7s;

        &:hover,
        &:focus {
            box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
        }
    }

    &__link {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding: 1rem;
    }

    &__image {
        display: block;
    }

    &__price {
        margin-bottom: 0;
    }

    &__name {
        margin: 0;
        padding-bottom: 1rem;
    }
}
</style>
