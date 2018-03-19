const PLAYER_STORAGE_PREFIX = 'kaltura-player-js';
const APP_STORAGE_PREFIX = 'kaltura-player-app';

class StorageManager {
  static clearPlayerStorage() {
    clearByNamespace(PLAYER_STORAGE_PREFIX);
  }

  static clearAppStorage() {
    clearByNamespace(APP_STORAGE_PREFIX);
  }

  static hasAppStorage() {
    return hasItem(`${APP_STORAGE_PREFIX}___data`);
  }

  static setAppStorage(config, embedServiceUrl, playerType) {
    setItem(`${APP_STORAGE_PREFIX}___data`, {
      config: config,
      embedServiceUrl: embedServiceUrl,
      playerType: playerType
    });
  }

  static setAppMediaInfo(mediaInfo) {
    setItem(`${APP_STORAGE_PREFIX}___mediaInfo`, mediaInfo);
  }

  static getAppStorage() {
    return getItem(`${APP_STORAGE_PREFIX}___data`);
  }

  static getAppMediaInfo() {
    return getItem(`${APP_STORAGE_PREFIX}___mediaInfo`);
  }
}

function setItem(key, value) {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function getItem(key) {
  if (localStorage) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
}

function hasItem(key) {
  if (localStorage) {
    return !!(localStorage.getItem(key))
  }
  return false;
}

function clearByNamespace(namespace) {
  if (localStorage) {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith(namespace)) {
        localStorage.removeItem(key);
      }
    });
  }
}

export {StorageManager};
