import * as types from './mutation-types'
import store from './index'

export const storeSetPlayer = player => store.commit(types.SET_PLAYER, player);
export const storeAddPlugin = plugin => store.commit(types.ADD_PLUGIN, plugin);
export const storeRemovePlugin = name => store.commit(types.REMOVE_PLUGIN, name);
export const storeUpdateAdTagUrl = adtag => store.commit(types.UPDATE_AD_TAG_URL, adtag);
export const storeUpdateConfig = config => store.commit(types.UPDATE_CONFIG, config);
export const storeUpdateMediaInfo = mediaInfo => store.commit(types.UPDATE_MEDIA_INFO, mediaInfo);
