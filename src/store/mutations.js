import * as types from './mutation-types'

export default {
  [types.SET_PLAYER](state, player) {
    state.player = player;
  },
  [types.ADD_PLUGIN](state, plugin) {
    state.config.player.plugins[plugin.name] = plugin.config;
  },
  [types.REMOVE_PLUGIN](state, name) {
    if (state.config.player.plugins[name]) {
      delete state.config.player.plugins[name];
    }
  },
  [types.UPDATE_AD_TAG_URL](state, adtag) {
    state.config.player.plugins.ima.adTagUrl = adtag;
  },
  [types.UPDATE_CONFIG](state, config) {
    state.config = config;
  },
  [types.UPDATE_MEDIA_INFO](state, mediaInfo) {
    state.mediaInfo = mediaInfo;
  }
};
