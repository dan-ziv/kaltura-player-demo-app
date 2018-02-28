import {getUrlParameter} from './url-parameter'
import {loadScriptAsync} from './load-script-async'
import JSONC from 'jsoncomp'

const PlayerScripts = {
  ott: 'kaltura-tv-player.js',
  ovp: 'kaltura-ovp-player.js'
};

const FALLBACK_SCRIPT = PlayerScripts.ovp;

function loadPlayer() {
  let playerScript;
  let decompressedData;
  const generatedData = getUrlParameter('generate');
  if (generatedData) {
    decompressedData = JSONC.decompress(JSON.parse(generatedData));
    playerScript = PlayerScripts[decompressedData.type];
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

export {loadPlayer};
