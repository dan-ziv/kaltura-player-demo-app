import Vue from 'vue'
import App from './app'
import Element from 'element-ui'
import store from './store'

Vue.use(Element);
Vue.config.productionTip = false;

WebFont.load({
  google: {
    families: [
      "Barlow"
    ]
  }
});

new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
});
