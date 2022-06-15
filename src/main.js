import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import HomeViewVue from './views/HomeView.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  { path: '/', component: HomeViewVue },
  
]

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
