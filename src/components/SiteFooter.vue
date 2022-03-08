<template>
    <div class="m-site-footer">
        &nbsp;
        <div class="m-site-footer__address">
            <h4>
                Please contact {{ getData?.SalesRep?.FirstName }} {{ getData?.SalesRep?.LastName }} for placing orders:
            </h4>
            <address>
                <span
                    >Phone:
                    <a :href="`tel:${getData?.SalesRep?.CellPhone}`" class="m-site-footer__link -hoverStyle">{{
                        getData?.SalesRep?.Phone
                    }}</a></span
                >
                <span
                    >Email:
                    <a :href="`mailto:${getData?.SalesRep?.EmailAddress}`" class="m-site-footer__link -hoverStyle">{{
                        getData?.SalesRep?.EmailAddress
                    }}</a></span
                >
                <span
                    >Address: {{ getData?.SalesRep?.City }}, {{ getData?.SalesRep?.State }}
                    {{ getData?.SalesRep?.PostalCode }}</span
                >
            </address>
        </div>
        <div class="m-site-footer__logo">
            <picture v-if="getData?.ManufacturerID" class="m-site-footer__logo">
                <source
                    media="(max-width: 768px)"
                    :srcset="`http://images.repzio.com/productimages/${getData.ManufacturerID}/logo${getData.ManufacturerID}_lg.jpg?width=100`"
                />
                <source
                    media="(min-width: 769px)"
                    :srcset="`http://images.repzio.com/productimages/${getData.ManufacturerID}/logo${getData.ManufacturerID}_lg.jpg?width=175`"
                />
                <img
                    :src="`http://images.repzio.com/productimages/${getData.ManufacturerID}/logo${getData.ManufacturerID}_lg.jpg?width=100`"
                    :alt="`${getData.CompanyName} Logo`"
                />
            </picture>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SiteFooter',
    computed: {
        ...mapGetters(['getData']),
    },
};
</script>

<style scoped lang="scss">
@import '../styles/_variables.scss';

.m-site-footer {
    align-items: center;
    background: #9fa2a6;
    background: -webkit-linear-gradient(top, #4d565e, #233341);
    background: -moz-linear-gradient(top, #4d565e, #233341);
    background: linear-gradient(to bottom, #4d565e, #233341);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 200px;
    padding: 20px;

    @include media-breakpoint-up(md) {
        min-height: 350px;
        padding: 30px;
    }

    &__address {
        text-align: center;
        width: 100%;

        @include media-breakpoint-up(md) {
            margin-bottom: 1.5rem;
            padding-right: 10px;
            width: 30%;
            text-align: left;
        }

        @include media-breakpoint-up(lg) {
            width: 20%;
        }

        span {
            display: block;
            line-height: 2rem;
        }
    }

    &__logo {
        margin-top: 2rem;
        width: 100%;

        @include media-breakpoint-up(md) {
            margin-top: 0;
            padding-left: 10px;
            width: 30%;
        }

        @include media-breakpoint-up(lg) {
            width: 20%;
        }
    }
}
</style>
