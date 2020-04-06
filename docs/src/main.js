import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VirtualList from '../../dev/index'
import Introduction from './components/Introduction'
import Tab from './components/Tab'

Vue.component('VirtualList', VirtualList)
Vue.component('Introduction', Introduction)
Vue.component('Tab', Tab)

Vue.config.devtools = false
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
