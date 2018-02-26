<template>
  <el-form :size="size" label-position="left" ref="form" :model="config" label-width="150px">
    <el-form-item label="Auto Play">
      <el-checkbox v-model="config.autoplay"/>
    </el-form-item>
    <el-form-item label-width="200px" label="Allow Muted Auto Play">
      <el-checkbox v-model="config.allowMutedAutoPlay"/>
    </el-form-item>
    <el-form-item label="Preload">
      <el-checkbox v-model="preload"/>
    </el-form-item>
    <el-form-item label="Muted">
      <el-checkbox v-model="config.muted"/>
    </el-form-item>
    <el-form-item label="Playsinline">
      <el-checkbox v-model="config.playsinline"/>
    </el-form-item>
    <el-form-item label="Volume">
      <el-input-number :min="0" :max="1" :step="0.1" v-model="config.volume"/>
    </el-form-item>
    <el-form-item label="Start Time">
      <el-input v-model="config.startTime"/>
    </el-form-item>
    <el-form-item label-width="200px" label="Use Native Text Track">
      <el-checkbox v-model="config.useNativeTextTrack"/>
    </el-form-item>
    <el-form-item label="Audio Language">
      <el-input v-model="config.audioLanguage"/>
    </el-form-item>
    <el-form-item label="Text Language">
      <el-input v-model="config.textLanguage"/>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    props: ['size'],
    updated() {
      if (this.$store.state.player) {
        this.$store.state.player.configure({
          playback: this.config
        });
      }
    },
    created() {
      if (this.$store.state.player) {
        this.cachedConfig = this.$store.state.player.config.playback;
      }
    },
    computed: {
      config() {
        if (this.$store.state.player) {
          return this.cachedConfig;
        } else {
          return this.$store.state.config.player.playback;
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
</style>
