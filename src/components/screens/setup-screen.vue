<template>
  <el-row v-loading="setup">
    <el-col :span="7">
      <div class="grid-content"></div>
    </el-col>
    <el-col :span="9">
      <el-row>
        <el-col :span="12">
          <h1>Configuration</h1>
        </el-col>
        <el-col :span="12">
          <div style="position: relative;">
            <el-button style="float: right; margin-top: 30px;" v-loading="setup" type="primary" @click="setupPlayer">Setup
              Player
            </el-button>
          </div>
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
    </el-col>
    <el-col :span="7">
      <div class="grid-content"></div>
    </el-col>
  </el-row>
</template>

<script>
  import ProviderOptions from '../options/provider-options'
  import GenericOptions from '../options/generic-options'
  import PlayerOptions from '../options/player-options'
  import UIOptions from '../options/ui-options'

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
