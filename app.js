var i = 1;
new Vue({
  el: '#vue-app',
  data: {
    age: 16,
    a: 0,
    b: 0
  },
  computed: {
    addToA : function () {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB : function () {
      console.log('addToB');
      return this.b + this.age;
    }
  }
});
