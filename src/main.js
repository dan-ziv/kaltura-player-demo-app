import Vue from 'vue'
import App from './app'
import Element from 'element-ui'
import store from './store'
import {loadPlayer} from './utils/player-loader'

Vue.use(Element);
Vue.config.productionTip = false;

WebFont.load({
  google: {
    families: [
      "Barlow"
    ]
  }
});

loadPlayer().then((data) => {
  const vm = new Vue({
    el: '#app',
    store,
    components: {App},
    template: '<App/>'
  });
  if (data) {
    vm.$store.commit('updateConfig', data.config);
  }
});
