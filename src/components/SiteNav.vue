<template>
    <nav class="m-site-nav">
        <router-link to="/" class="m-site-nav__link">
            <span class="m-site-nav__company">{{ getData?.CompanyName }}</span>
            <br />
            <picture v-if="getData?.ManufacturerID" class="m-site-nav__logo">
                <source
                    media="(max-width: 768px)"
                    :srcset="`http://images.repzio.com/productimages/${getData.ManufacturerID}/logo${getData.ManufacturerID}_lg.jpg?width=175`"
                />
                <source
                    media="(max-width: 992px)"
                    :srcset="`http://images.repzio.com/productimages/${getData.ManufacturerID}/logo${getData.ManufacturerID}_lg.jpg?width=200`"
                />
                <source
                    media="(min-width: 993px)"
                    :srcset="`http://images.repzio.com/productimages/${getData.ManufacturerID}/logo${getData.ManufacturerID}_lg.jpg?width=225`"
                />
                <img
                    :src="`http://images.repzio.com/productimages/${getData.ManufacturerID}/logo${getData.ManufacturerID}_lg.jpg?width=200`"
                    :alt="`${getData.CompanyName} Logo`"
                />
            </picture>
        </router-link>
        <br />
        <router-link v-if="$route.path !== '/'" to="/" class="m-site-nav__link -hoverStyle"
            >Back To All Products</router-link
        >
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SiteNav',
    computed: {
        ...mapGetters(['getData']),
    },
};
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

.m-site-nav {
    padding: 20px;

    @include media-breakpoint-up(md) {
        padding: 30px;
    }

    &__link {
        display: inline-block;
    }

    &__logo {
        display: inline-block;
    }

    &__company {
        font-size: 1.25rem;

        @include media-breakpoint-up(md) {
            font-size: 2rem;
        }
    }
}
</style>
