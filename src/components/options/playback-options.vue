<template>
  <el-form :size="size" label-position="left" ref="form" :model="config" label-width="150px">
    <el-form-item class="padding-sm" label-width="200px" label="Auto Play">
      <el-checkbox v-model="config.autoplay"/>
    </el-form-item>
    <el-form-item class="padding-sm" label-width="200px" label="Allow Muted Auto Play">
      <el-checkbox v-model="config.allowMutedAutoPlay"/>
    </el-form-item>
    <el-form-item class="padding-sm" label-width="200px" label="Preload">
      <el-checkbox v-model="preload"/>
    </el-form-item>
    <el-form-item class="padding-sm" label-width="200px" label="Muted">
      <el-checkbox v-model="config.muted"/>
    </el-form-item>
    <el-form-item class="padding-sm" label-width="200px" label="Playsinline">
      <el-checkbox v-model="config.playsinline"/>
    </el-form-item>
    <el-form-item class="padding-sm" label="Volume">
      <el-input-number :min="0" :max="1" :step="0.1" v-model="config.volume"/>
    </el-form-item>
    <el-form-item class="padding-sm" label="Start Time">
      <el-input v-model="config.startTime"/>
    </el-form-item>
    <el-form-item class="padding-sm" label-width="200px" label="Use Native Text Track">
      <el-checkbox v-model="config.useNativeTextTrack"/>
    </el-form-item>
    <el-form-item class="padding-sm" label="Audio Language">
      <el-input v-model="config.audioLanguage"/>
    </el-form-item>
    <el-form-item class="padding-sm" label="Text Language">
      <el-input v-model="config.textLanguage"/>
    </el-form-item>
  </el-form>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: ['size', 'playerLoaded'],
    updated() {
      if (this.playerLoaded) {
        this.player.configure({
          playback: this.config
        });
      }
    },
    created() {
      if (this.playerLoaded) {
        this.cachedConfig = this.playbackConfig;
      }
    },
    computed: {
      ...mapGetters([
        'player',
        'playbackConfig'
      ]),
      config() {
        if (this.playerLoaded) {
          return this.cachedConfig;
        } else {
          return this.playbackConfig;
        }
      },
      preload: {
        get: function () {
          return this.config.preload === 'auto';
        },
        set: function (preload) {
          this.config.preload = preload ? 'auto' : 'none';
        }
      }
    },
    data() {
      return {
        cachedConfig: {}
      };
    }
  }
</script>

<style scoped>
  .top-space {
    margin-top: 5px;
  }
</style>
