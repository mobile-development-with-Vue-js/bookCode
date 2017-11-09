const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        incrementMutation: state => state.count++,
        decrementMutation: state => state.count--
    }
});

new Vue({
    el: '#app',
    computed: {
        count () {
            return store.state.count
        }
    },
    methods: {
        incrementMethod () {
            store.commit('incrementMutation')
        },
        decrementMethod () {
            store.commit('decrementMutation')
        }
    }
})