import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import store from './store/index'
import {loadPlayer, createPlayer} from './utils/player-loader'
import {storeUpdateConfig, storeSetPlayer, storeUpdateMediaInfo} from './store/mutations-helpers'

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
