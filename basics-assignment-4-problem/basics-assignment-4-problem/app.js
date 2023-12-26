const app = Vue.createApp({
  data() {
    return {
      cssClass: null,
      visible: true,
      bgcolor:'#56e635',
    };
  },
  methods: {
    userinput(event) {
      this.cssClass = event.target.value;
    },
    showhide() {
        this.visible = !this.visible 
      if (this.visible) {
        this.cssClass = "visible";
      } else {
        this.cssClass = "hidden";
      }
    },
    bgcolorvalue(event){
        this.bgcolor = event.target.value
    }
  },
}).mount("#assignment");
