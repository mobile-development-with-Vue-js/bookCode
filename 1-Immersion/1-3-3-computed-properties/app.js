var app = new Vue({
    el: '#greeting',
    data: {
        greeting: 'hello'
    },
    computed: {
        spacedGreeting: function () {
            return this.greeting.split('').join(' ');
        }
    }
});
