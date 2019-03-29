<template>
  <div class="vuex">
    <div>
      <p @click="changeNum">姓名：{{name}} 年龄：{{age}} 次数：{{num}}</p>
      <button @click="changeNumAnsyc">change</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "vuex",
  computed: {
    name: function() {
      return this.$store.state.name; //this.$store 获取到 store, this.$store.state 来获取状态对象，
    },

    age: function() {
      return this.$store.getters.getAge;
    },

    num: function() {
      return this.$store.state.num;
    }
  },
  methods: {
    changeNum: function() {
      //在组件中提交

      this.$store.commit("change", 10); //this.$store.commit 来触发之前定义好的 mutations 中的方法   change是mutations里的函数，a=10
    },

    changeNumAnsyc: function() {
      this.$store.dispatch("add", 5);

      //dispatch：翻译为‘派发、派遣’的意思，触发事件时，dispatch就会通知actions（跟commit一样一样的）参数跟commit也是一样的。
    }
  }
};
</script>
<style scoped>
</style>
