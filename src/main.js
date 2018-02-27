import Vue from 'vue'
import App from './app'
import Element from 'element-ui'
import store from './store'
import WebFont from 'webfontloader';

Vue.use(Element);
Vue.config.productionTip = false;

const webFontConfig = {
  google: {
    families: [
      "Barlow"
    ]
  }
};

WebFont.load(webFontConfig);

new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
});
