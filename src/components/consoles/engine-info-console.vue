<template>
  <el-row>
    <div class="text item font-sm">
      <b>Engine Type:</b> <span class="engine-info-type">{{engineType}}</span>
    </div>
    <div class="text item font-sm">
      <b>Stream Type:</b> <span class="engine-info-type">{{streamType}}</span>
    </div>
    <div class="text item font-sm">
      <b>Adapter Type:</b> <span class="engine-info-type">{{adapterType}}</span>
    </div>
  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    created() {
      this.player.addEventListener(this.player.Event.SOURCE_SELECTED, () => {
        this.engineType = this.player.engineType;
        this.streamType = this.player.streamType;
        this.rawAdapterType = this.player._engine._mediaSourceAdapter.constructor.id;
      })
    },
    computed: {
      ...mapGetters([
        'player'
      ]),
      adapterType() {
        switch (this.rawAdapterType) {
          case 'NativeAdapter':
            return 'native';
          case 'HlsAdapter':
            return 'hls.js';
          case 'DashAdapter':
            return 'shaka-player';
        }
      }
    },
    data() {
      return {
        streamType: '',
        engineType: '',
        rawAdapterType: ''
      }
    }
  }
</script>

<style scoped>
  .engine-info-type {
    color: cornflowerblue;
  }
</style>
