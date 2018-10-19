import Vue from 'vue'
import App from './App.vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import VueRangedatePicker from 'vue-rangedate-picker'

Vue.config.productionTip = false

// Ajout du datepicker range 
Vue.use(VueRangedatePicker) // using it
Vue.component('DatePicker', VueRangedatePicker)
// Utilisation de UIkit
UIkit.use(Icons)

new Vue({
  render: h => h(App)
}).$mount('#app')