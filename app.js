var i = 1;
new Vue({
  el: '#vue-app',
  data: {
    name: 'Denys',
    job: "Developer",
    website: 'http://google.com'
  },
  methods: {
    greet: function (t) {
      return 'Good ' + t + ', ' + this.name;
    },
    rf: function (a) {
      console.log(a * i);
      i+=5;
    }
  }
});
