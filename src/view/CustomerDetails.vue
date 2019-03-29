<template>
  <div class="details container">
    <router-link to="/" class="btn btn-default">返回</router-link>
    <h1 class="page-header">
        {{customer.name}}

        <span class="pull-right">
            <router-link class="btn btn-primary" :to="'/edit/'+customer.id">编辑</router-link>
            <button class="btn btn-danger" v-on:click="deleteCurstomer(customer.id)">删除</button>
        </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-star-empty">{{customer.email}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{customer.deucation}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-star-empty">{{customer.graduationschool}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{customer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-star-empty">{{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "details",
  data() {
    return {
      customer: ""
    };
  },
  created() {
    this.fetchCustomers(this.$route.params.id); 
  },
  methods: {
    fetchCustomers(id) {
      this.$http
        .get("http://localhost:3000/user/" + id)
        .then(res => {
          this.customer = res.data;
        })
       
    },
    deleteCurstomer(id){
        console.log(id);
        this.$http.delete("http://localhost:3000/user/" + id)
        .then(res=>{
            this.$router.push({path:"/",query:{alert:"用户信息删除成功！"}})
        })
    }
  }
};
</script>

<style scoped>
</style>
