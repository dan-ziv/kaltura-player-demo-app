import {getUrlParameter} from './url-parameter'
import {loadScriptAsync} from './load-script-async'
import JSONC from 'jsoncomp'

const PlayerScripts = {
  OTT: 'kaltura-tv-player.js',
  OVP: 'kaltura-ovp-player.js'
};

const QA_OVP_PLAYER_SCRIPT = '//qa-apache-php7.dev.kaltura.com/p/1091/sp/109100/embedPlaykitJs/uiconf_id/15211585/partner_id/1091';
const FALLBACK_SCRIPT = PlayerScripts.OVP;

function loadPlayer() {
  let playerScript;
  let decompressedData;
  const generatedData = getUrlParameter('generate');
  if (generatedData) {
    decompressedData = JSONC.decompress(JSON.parse(generatedData));
    playerScript = `./${PlayerScripts[decompressedData.type.toUpperCase()]}`;
  } else {
    const version = getUrlParameter('version');
    if (version) {
      playerScript = `${QA_OVP_PLAYER_SCRIPT}'/versions/kaltura-ovp-player=${version}`;
    } else {
      playerScript = `./${FALLBACK_SCRIPT}`;
    }
  }
  return loadScriptAsync(playerScript)
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
