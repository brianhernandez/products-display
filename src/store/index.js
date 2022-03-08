import { createStore } from 'vuex';
import dataFile from '@/assets/data.json';

export default createStore({
    state: {
        data: Object,
    },
    getters: {
        getData(state) {
            return state.data;
        },
        getProduct: (state) => (productId) => {
            return state.data.items.find((item) => {
                return item.ProductID === productId;
            });
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state.data = data;
        },
    },
    actions: {
        async fetchData(context) {
            try {
                console.log('[ACTION] Fetching product data from GitHub...');
                await fetch('https://raw.githubusercontent.com/RepZio/TestApplication/master/test.json')
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        context.commit('SET_DATA', data);
                    });
            } catch (e) {
                console.error('Error in fetch: ', e);
                console.log('[ACTION] Loading data from file');
                context.commit('SET_DATA', dataFile);
            }
        },
    },
    modules: {},
});
