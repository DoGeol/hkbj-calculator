import Vue from 'vue'
import App from './App.vue'

import './plugins'
import './styles/reset.scss'
import './styles/element.scss'
import './styles/temp.scss'
import 'pretendard/dist/web/static/pretendard.css'

//fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear, faRotate, faWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGear, faWrench, faRotate)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
