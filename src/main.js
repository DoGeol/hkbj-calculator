import Vue from 'vue'
import App from './App.vue'

import './plugins'
import './styles/reset.scss'
import './styles/element.scss'
import 'pretendard/dist/web/static/pretendard.css'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
