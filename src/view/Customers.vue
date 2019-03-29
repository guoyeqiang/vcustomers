<template>
  <div class="customers container">
    <Alert v-if="alert" v-bind:message="alert"></Alert>
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="filterInput">
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filterby(customers,filterInput)" :key="customer.name">
          <td>{{customer.name}}</td>
          <td>{{customer.phone}}</td>
          <td>{{customer.email}}</td>
          <td><router-link class="btn btn-default" v-bind:to="{path:'/customerdetails/'+customer.id}">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert  from '.././components/Alert'
export default {
  name: 'customers',
  data(){
    return{
      customers:[],
      alert:"",
      filterInput:""
    }
  },
  components:{
    Alert
  },
  created() {
    console.log(this.$route.query.alert);
    if(this.$route.query.alert){
      this.alert=this.$route.query.alert;
    }
    this.fetchCustomers();
  },
  updated() {
    // this.fetchCustomers();
  },
  methods:{
    fetchCustomers(){
      this.$http.get('http://localhost:3000/user')
      .then(res=>{
        this.customers=res.data;
      })
    },
    filterby(customers,value){
      return customers.filter(function(customer){
        return customer.name.match(value);
      })
    }
  }
}
</script>

<style scoped>

</style>
