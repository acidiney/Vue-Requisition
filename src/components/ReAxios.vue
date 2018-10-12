<template>
  <div class="content">
   <table class="table center-block">
     <thead>
       <tr>
         <td>#</td>
         <td>name</td>
         <td>email</td>
         <td>website</td>
       </tr>
     </thead>
     <tbody>
       <tr v-for="user in users" :key="user.id">
         <td>{{user.id}}</td>
         <td>{{user.name}}</td>
         <td>{{user.email}}</td>
         <td><a :href="transformLink(user.website)">{{user.website}}</a></td>
       </tr>
     </tbody>
   </table>
  </div>
</template>

<script>
import axios from 'axios';
import linkMixins from '@/link.mixins.js'

export default {
  mixins: [linkMixins],
  name: 'ReAxios',
  data () {
    return {
      users: [],
      err: {
        code: null,
        msg: ''
      }
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.users = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
