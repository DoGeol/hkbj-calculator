import Vue from 'vue'
import deepmerge from 'deepmerge'

Vue.use({
  install(Vue) {
    Vue.prototype.$merge = deepmerge
  },
})
