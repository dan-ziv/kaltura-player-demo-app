import Vue from 'vue'
import Vuex from 'vuex'
import DefaultConfig from './data/config'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    player: null,
    config: DefaultConfig
  },
  mutations: {
    setPlayer(state, player) {
      state.player = player;
    },
    addPlugin(state, plugin) {
      state.config.player.plugins[plugin.name] = plugin.config;
    },
    removePlugin(state, name) {
      if (state.config.player.plugins[name]) {
        delete state.config.player.plugins[name];
      }
    },
    updateAdTagUrl(state, adtag) {
      state.config.player.plugins.ima.adTagUrl = adtag;
    }
  }
});

export default store;
