import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import {DefaultProviderConfig} from '../data/default-provider-config'
import {DefaultGenericConfig} from '../data/default-generic-config'
import {DefaultPlayerConfig} from '../data/default-player-config'
import {DefaultUIConfig} from '../data/default-ui-config'

Vue.use(Vuex);

const state = {
  player: null,
  mediaInfo: null,
  playerType: 'ovp',
  embedServiceUrl: '',
  genericConfig: DefaultGenericConfig,
  providerConfig: DefaultProviderConfig,
  playerConfig: DefaultPlayerConfig,
  uiConfig: DefaultUIConfig,
  runtimeConfig: null
};

const store = new Vuex.Store({
  state,
  mutations,
  getters
});

export default store;
