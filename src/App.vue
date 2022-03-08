<template>
    <header>
        <site-nav></site-nav>
    </header>
    <main>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" :key="$route.path" />
            </transition>
        </router-view>
    </main>
    <footer>
        <site-footer></site-footer>
    </footer>
</template>

<script>
import SiteNav from '@/components/SiteNav.vue';
import SiteFooter from '@/components/SiteFooter.vue';

export default {
    components: {
        SiteNav,
        SiteFooter,
    },
};
</script>

<style lang="scss">
@import './styles/_variables.scss';

html,
body {
    margin: 0;
}

#app {
    color: #233241;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

main {
    margin: 0 auto;
    max-width: 1200px;
    padding: 1rem;
}

h1 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;

    @include media-breakpoint-up(md) {
        font-size: 2rem;
        margin-bottom: 2.5rem;
    }
}

a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;

    &.-hoverStyle {
        border-bottom: 3px solid #f6bd18;
        padding: 3px 3px 0;
    }

    &:visited {
        color: inherit;
    }
}

footer {
    color: white;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
