const { createApp } = Vue

createApp({
  data() {
    return {
      name: 'Saurav',
      age: 22,
      img:'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  },
  methods: {
    random(){
        return Math.random()
    }
  },
}).mount('#assignment')