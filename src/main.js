import Vue from 'vue'
import App from './app'
import Element from 'element-ui'
import store from './store'
import {loadPlayer, createPlayer} from './utils/player-loader'

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
        this.$store.commit('updateConfig', data.config);
        createPlayer(this.$store.state.config);
        this.$store.commit('setPlayer', __kalturaPlayer);
      }
    },
    components: {App},
    template: '<App/>'
  });
});
