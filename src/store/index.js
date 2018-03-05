import Vue from 'vue'
import Vuex from 'vuex'
import DefaultConfig from '../data/config'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  player: null,
  mediaInfo: null,
  config: DefaultConfig
};

const store = new Vuex.Store({
  state,
  mutations: mutations
});

export default store;
