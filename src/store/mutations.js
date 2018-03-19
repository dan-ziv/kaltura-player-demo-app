import * as types from './mutation-types'

export default {
  [types.SET_PLAYER](state, player) {
    state.player = player;
  },
  [types.ADD_PLUGIN](state, plugin) {
    state.playerConfig.plugins[plugin.name] = plugin.config;
  },
  [types.REMOVE_PLUGIN](state, name) {
    if (state.playerConfig.plugins[name]) {
      delete state.playerConfig.plugins[name];
    }
  },
  [types.UPDATE_AD_TAG_URL](state, adtag) {
    state.playerConfig.plugins.ima.adTagUrl = adtag;
  },
  [types.UPDATE_CONFIG](state, config) {
    state.runtimeConfig = config;
  },
  [types.UPDATE_MEDIA_INFO](state, mediaInfo) {
    state.mediaInfo = mediaInfo;
  },
  [types.UPDATE_PLAYER_TYPE](state, type) {
    state.playerType = type;
  },
  [types.UPDATE_EMBED_SERVICE_URL](state, url) {
    state.embedServiceUrl = url;
  }
};
