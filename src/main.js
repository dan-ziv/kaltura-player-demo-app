import Vue from 'vue'
import App from './app'
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

loadPlayer().then((data) => {
  new Vue({
    el: '#app',
    store,
    beforeCreate() {
      if (data) {
        storeUpdateConfig(data.config);
        storeUpdateMediaInfo(data.mediaInfo);
        createPlayer(this.$store.getters.config);
        storeSetPlayer(__kalturaPlayer);
      }
    },
    components: {App},
    template: '<App/>'
  });
});
