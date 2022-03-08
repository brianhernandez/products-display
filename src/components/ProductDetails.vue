<template>
    <h1 class="m-product-details__heading">Product details for {{ selectedProduct.ItemName }}</h1>
    <picture class="m-product-details__image">
        <source media="(max-width: 576px)" :srcset="`${selectedProduct.PhotoName}?width=300`" />
        <source media="(max-width: 768px)" :srcset="`${selectedProduct.PhotoName}?width=400`" />
        <source media="(max-width: 1200px)" :srcset="`${selectedProduct.PhotoName}?width=500`" />
        <source media="(min-width: 1201px)" :srcset="`${selectedProduct.PhotoName}?width=650`" />
        <img :src="`${selectedProduct.PhotoName}?width=400`" :alt="selectedProduct.Description" />
    </picture>
    <div class="m-product-details__details">
        <dl>
            <div>
                <dt>Item ID</dt>
                <dd>{{ selectedProduct.ItemID }}</dd>
            </div>
            <div>
                <dt>Item Name</dt>
                <dd>{{ selectedProduct.ItemName }}</dd>
            </div>
            <div>
                <dt>Description</dt>
                <dd>{{ selectedProduct.Description ? selectedProduct.Description : 'Unavailable' }}</dd>
            </div>
            <div>
                <dt>Dimensions</dt>
                <dd>{{ selectedProduct.Dimensions }}</dd>
            </div>
            <div>
                <dt>Base Price</dt>
                <dd>{{ priceInCurrency(selectedProduct.BasePrice) }}</dd>
            </div>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    props: {
        selectedProduct: {
            type: Object,
        },
    },
    methods: {
        priceInCurrency(price) {
            let stringPrice = price.toString();
            stringPrice = stringPrice.split('.');

            if (stringPrice[1]?.length) {
                stringPrice[1] = stringPrice[1] + '0';
            } else {
                stringPrice[1] = '00';
            }

            stringPrice = stringPrice.join('.');
            return '$' + stringPrice;
        },
    },
};
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

.m-product-details {
    &__image {
        align-items: center;
        display: flex;
        justify-content: center;
        min-height: 250px;

        @include media-breakpoint-up(sm) {
            min-height: 350px;
        }

        @include media-breakpoint-up(md) {
            min-height: 450px;
        }

        @include media-breakpoint-up(xl) {
            min-height: 600px;
        }
    }

    &__details {
        dl {
            display: inline-block;
            margin: 1rem auto 1rem;
            max-width: 400px;
            text-align: left;

            div {
                display: flex;
                justify-content: flex-start;
                margin: 0 auto;
            }
        }

        dt {
            font-weight: 700;
            min-width: 100px;
            padding: 0.5rem;
        }

        dd {
            flex-grow: 2;
            margin-left: 0;
            padding: 0.5rem;
        }
    }
}
</style>
