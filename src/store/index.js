import Vue from 'vue'
import Vuex from 'vuex'
import DefaultConfig from '../data/config'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  player: null,
  mediaInfo: null,
  config: DefaultConfig
};

const store = new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
