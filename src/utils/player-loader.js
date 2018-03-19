import {getUrlParameter} from './url-parameter'
import {loadScriptAsync} from './load-script-async'

const PlayerScripts = {
  OTT: 'kaltura-tv-player.js',
  OVP: 'kaltura-ovp-player.js'
};

function loadPlayer(embedServiceUrl, playerType) {
  let playerScript;
  if (embedServiceUrl) {
    playerScript = embedServiceUrl;
  } else {
    playerScript = PlayerScripts[playerType.toUpperCase()];
  }
  return loadScriptAsync(playerScript);
}

// function loadPlayer() {
//   let playerScript;
//   let decompressedData;
//   const generatedData = getUrlParameter('generate');
//   if (generatedData) {
//     decompressedData = JSONC.decompress(JSON.parse(generatedData));
//     playerScript = `./${PlayerScripts[decompressedData.type.toUpperCase()]}`;
//   } else {
//     const version = getUrlParameter('version');
//     if (version) {
//       playerScript = `${QA_OVP_PLAYER_SCRIPT}'/versions/kaltura-ovp-player=${version}`;
//     } else {
//       playerScript = `./${FALLBACK_SCRIPT}`;
//     }
//   }
//   return loadScriptAsync(playerScript)
//     .then(() => {
//       if (decompressedData) {
//         return decompressedData;
//       }
//     })
//     .catch((e) => {
//       console.error(e);
//     });
// }

function createPlayer(config) {
  const playerContainer = document.createElement('div');
  playerContainer.id = config.targetId;
  document.body.appendChild(playerContainer);
  __kalturaPlayer = KalturaPlayer.setup(config);
}

export {loadPlayer, createPlayer};
