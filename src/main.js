import Vue from 'vue'
import App from './App'
import vres from 'vue-resource';


Vue.use(vres)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
