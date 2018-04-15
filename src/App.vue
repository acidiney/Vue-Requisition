<template>
  <div id="app">
    <div>
      <img src="./assets/logo.png">
      <h2>Post's</h2>
    </div>
    <h3>Axios</h3>
    <ReAxios/>
    <h3>Vue-Resource</h3>
    <ReVueResource />
  </div>
</template>

<script>
import ReAxios from './components/ReAxios'
import ReVueResource from './components/ReVueResource'

export default {
  name: 'App',
  components: {
    ReAxios,
    ReVueResource
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
  font-family: 'Courier New', Courier, monospace;
}
</style>
