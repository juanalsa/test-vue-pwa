const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0
        };
    },
    methods: {
        modCount(instr = "add", incr = 1) {
            if (instr === "add") {
                this.count += incr;
            } else {
                this.count -= incr;
            }
        },
    },
});

