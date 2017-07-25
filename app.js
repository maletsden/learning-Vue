var i = 1;
new Vue({
  el: '#vue-app',
  data: {
    red: true,
    blue: false
  },
  computed: {
    compClasses: function () {
      return {
        red: this.red,
        blue: this.blue
      }
    }
  }
});
