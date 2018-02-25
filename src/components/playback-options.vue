<template>
  <el-row>
    <el-card class="box-card">
      <el-collapse>
        <el-collapse-item title="Playback Options" name="playback-options">
          <el-form size="mini" label-position="left" ref="form" :model="config" label-width="200px">
            <el-form-item label="Auto Play">
              <el-checkbox v-model="config.autoplay"/>
            </el-form-item>
            <el-form-item label="Allow Muted Auto Play">
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
            <el-form-item label="Use Native Text Track">
              <el-checkbox v-model="config.useNativeTextTrack"/>
            </el-form-item>
            <el-form-item label="Audio Language">
              <el-input v-model="config.audioLanguage"/>
            </el-form-item>
            <el-form-item label="Text Language">
              <el-input v-model="config.textLanguage"/>
            </el-form-item>
            <el-form-item size="large" label-width="0px;">
              <el-button type="success" :loading="applying" round @click="onApply">Apply</el-button>
            </el-form-item>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </el-row>
</template>

<script>
  import Config from '../data/config'

  export default {
    props: ['playerObj'],
    methods: {
      onApply() {
        this.applying = true;
        this.player.configure({
          playback: this.config
        });
        setTimeout(() => this.applying = false, 500);
      }
    },
    computed: {
      preload: {
        get: function () {
          return this.config.preload === 'auto';
        },
        set: function (preload) {
          this.config.preload = preload ? 'auto' : 'none';
        }
      }
    },
    mounted() {
      this.config = Config.player.playback
    },
    data() {
      return {
        player: this.playerObj,
        config: {},
        applying: false
      };
    }
  }
</script>

<style scoped>
</style>
