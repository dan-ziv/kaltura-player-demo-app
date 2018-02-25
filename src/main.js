import Vue from 'vue'
import App from './app'
import Element from 'element-ui'

Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
});
