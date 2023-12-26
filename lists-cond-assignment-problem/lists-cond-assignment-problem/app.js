const app = Vue.createApp({
    data() {
        return {
            inputvalue:'',
            list:[],
            listshow:true 
        }
    },
    methods: {
        additem(){
            this.list.push(this.inputvalue)
            this.inputvalue = ''
        }
    },
}).mount('#assignment')