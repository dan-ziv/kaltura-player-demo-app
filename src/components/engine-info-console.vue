<template>
  <el-row>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Engine Info</span>
      </div>
      <div class="text item font-sm">
        <b>Engine Type:</b> <span class="engine-info-type">{{engineType}}</span>
      </div>
      <div class="text item font-sm">
        <b>Stream Type:</b> <span class="engine-info-type">{{streamType}}</span>
      </div>
      <div class="text item font-sm">
        <b>Adapter Type:</b> <span class="engine-info-type">{{adapterType}}</span>
      </div>
    </el-card>
  </el-row>
</template>

<script>
  export default {
    props: ['playerObj'],
    created() {
      this.player.addEventListener(this.player.Event.SOURCE_SELECTED, () => {
        this.engineType = this.player.engineType;
        this.streamType = this.player.streamType;
        this.rawAdapterType = this.player._engine._mediaSourceAdapter.constructor.id;
      })
    },
    computed: {
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
        player: this.playerObj,
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
