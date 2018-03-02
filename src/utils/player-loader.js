import {getUrlParameter} from './url-parameter'
import {loadScriptAsync} from './load-script-async'
import JSONC from 'jsoncomp'

const PlayerScripts = {
  OTT: 'kaltura-tv-player.js',
  OVP: 'kaltura-ovp-player.js'
};

const FALLBACK_SCRIPT = PlayerScripts.OVP;

function loadPlayer() {
  let playerScript;
  let decompressedData;
  const generatedData = getUrlParameter('generate');
  if (generatedData) {
    decompressedData = JSONC.decompress(JSON.parse(generatedData));
    playerScript = PlayerScripts[decompressedData.type.toUpperCase()];
  } else {
    playerScript = FALLBACK_SCRIPT;
  }
  return loadScriptAsync('./' + playerScript)
    .then(() => {
      if (decompressedData) {
        return decompressedData;
      }
    })
    .catch((e) => {
      console.error(e);
    });
}

function createPlayer(config) {
  const playerContainer = document.createElement('div');
  playerContainer.id = config.targetId;
  document.body.appendChild(playerContainer);
  __kalturaPlayer = KalturaPlayer.setup(config);
}

export {loadPlayer, createPlayer};
