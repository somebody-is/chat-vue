// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import store from './store/index'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


window.$ = window.jQuery = jquery

import '@/assets/fonts/material-icon/css/material-design-iconic-font.min.css'
import '@/assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker.min.css'
import '@/assets/css/style.min.css'

import '@/assets/vendor/jquery/jquery-3.5.1.min.js'
import '@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '@/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js'



Vue.config.productionTip = false
Vue.use(iView);
Vue.use(ElementUI);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
