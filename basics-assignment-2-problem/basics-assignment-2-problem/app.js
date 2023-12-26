const app = Vue.createApp({
  data() {
    return {
      name: "saurav",
      username: "",
      age: null,
    };
  },
  methods: {
    showalert() {
      alert(this.name);
    },
    uservalue(event) {
      this.username = event.target.value;
    },
    userage(event) {
      this.age = event.target.value;
    },
  },
}).mount("#assignment");
