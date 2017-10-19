import Vue from 'vue'
import hzyMain from './hzyMain'

// require('@static/config')
require('../../assets/js/jquery-1.10.2.min')

Vue.prototype.eventHub = Vue.prototype.eventHub || new Vue()
Vue.prototype.$ = Vue.prototype.$ || window.$

var main1 = new Vue({
  el: '#main',
  template: '<hzyMain/>',
  components: { hzyMain }
})
console.log(main1)
