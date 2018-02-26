import Vue from 'vue'
import App from './app'
import Element from 'element-ui'
import store from './store'

Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
});
