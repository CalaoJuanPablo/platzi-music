import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import EventBus from './plugins/event-bus'
import routes from './routes'
import msToMm from './filters/ms-to-mm'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
