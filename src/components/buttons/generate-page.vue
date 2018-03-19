<template>
  <el-row>
    <el-tooltip class="item" effect="dark" content="Generate test page url" placement="top-start">
      <el-button class="btn" type="primary" plain :loading="generating" @click="generate">Generate Test Page <i
        class="el-icon-tickets"></i>
      </el-button>
    </el-tooltip>
    <div :id="urlHiddenDivId" v-show="false">{{url}}</div>
  </el-row>
</template>

<script>
  import JSONC from 'jsoncomp'
  import {copyToClipboard} from '../../utils/copy-to-clipboard'
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'player',
        'runtimeConfig',
        'mediaInfo',
        'embedServiceUrl'
      ])
    },
    methods: {
      getJSON() {
        const config = this.runtimeConfig;
        config.player.playback = this.player.config.playback;
        const json = {
          config: config
        };
        if (this.embedServiceUrl) {
          json.embedServiceUrl = this.embedServiceUrl;
        } else {
          json.playerType = KalturaPlayer.PLAYER_TYPE;
        }
        if (this.mediaInfo) {
          json.mediaInfo = this.mediaInfo;
        }
        return json;
      },
      generate() {
        const json = this.getJSON();
        const compressedJSON = JSONC.compress(json);
        const encodedCompressedJSON = encodeURIComponent(JSON.stringify(compressedJSON));
        this.url = '?generate=' + encodedCompressedJSON;
        this.$alert(this.url, 'Generated Test Page URL', {
          customClass: 'box',
          confirmButtonText: 'Copy to clipboard',
          callback: action => {
            if (action === 'confirm') {
              copyToClipboard(this.urlHiddenDivId);
              this.$message({
                type: 'success',
                message: 'Copied'
              });
            }
          }
        });
      }
    },
    data() {
      return {
        generating: false,
        urlHiddenDivId: 'url-div',
        url: ''
      };
    }
  }
</script>

<style>
  .box {
    width: 50%;
    max-height: 50%;
  }

  .btn {
    width: 230px;
    max-width: 230px;
  }
</style>
