<template>
  <el-container v-loading="setup">
    <el-aside width="350px"/>
    <el-main>
      <el-row>
        <el-col :span="20">
          <h1>Configuration</h1>
        </el-col>
        <el-col :span="4">
          <el-button v-loading="setup" style="margin-top: 20px; width: 100%" type="primary" @click="setupPlayer">Setup Player
          </el-button>
        </el-col>
      </el-row>
      <div class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Generic Options</span>
          </div>
          <GenericOptions/>
        </el-card>
      </div>
      <div class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Provider Options</span>
          </div>
          <ProviderOptions/>
        </el-card>
      </div>
      <div class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Player Options</span>
          </div>
          <PlayerOptions/>
        </el-card>
      </div>
      <div class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>UI Options</span>
          </div>
          <UIOptions/>
        </el-card>
      </div>
    </el-main>
    <el-aside width="350px"/>
  </el-container>
</template>

<script>
  import ProviderOptions from './provider-options'
  import GenericOptions from './generic-options'
  import PlayerOptions from './player-options'
  import UIOptions from './ui-options'

  export default {
    computed: {
      config() {
        return this.$store.state.config;
      }
    },
    components: {
      ProviderOptions,
      GenericOptions,
      PlayerOptions,
      UIOptions
    },
    methods: {
      setupPlayer() {
        this.setup = true;
        const playerContainer = document.createElement('div');
        playerContainer.id = this.$store.state.config.targetId;
        document.body.appendChild(playerContainer);
        player = KalturaPlayer.setup(this.$store.state.config);
        setTimeout(() => {
          this.$store.commit('setPlayer', player);
          this.setup = false
        }, 600);
      }
    },
    data() {
      return {
        setup: false
      };
    }
  }
</script>

<style scoped>

</style>
