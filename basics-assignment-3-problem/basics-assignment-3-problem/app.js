const app = Vue.createApp({
  data() {
    return {
      countes: null,
    };
  },
  methods: {
    add(value) {
      this.countes = this.countes + value;
    },
  },
  watch: {
    countes(value) {
      if (value !== null)
        setTimeout(() => {
          this.countes = null;
        }, 5000);
    },
  },
}).mount("#assignment");
