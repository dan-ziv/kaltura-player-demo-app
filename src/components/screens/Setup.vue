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
            <el-button style="float: right; margin-top: 30px;" v-loading="setup" type="primary" @click="setupPlayer">
              Setup
              Player
            </el-button>
          </div>
        </el-col>
      </el-row>
      <el-collapse>
        <el-collapse-item>
          <template slot="title">
            <div slot="header" class="clearfix">
              <h2>Generic Options</h2>
            </div>
          </template>
          <div class="padding-sm">
            <el-card class="box-card">
              <GenericOptions/>
            </el-card>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <div slot="header" class="clearfix">
              <h2>Provider Options</h2>
            </div>
          </template>
          <div class="padding-sm">
            <el-card class="box-card">
              <ProviderOptions/>
            </el-card>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <div slot="header" class="clearfix">
              <h2>Player Options</h2>
            </div>
          </template>
          <div class="padding-sm">
            <el-card class="box-card">
              <PlayerOptions :playerLoaded="false"/>
            </el-card>
          </div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <div slot="header" class="clearfix">
              <h2>UI Options</h2>
            </div>
          </template>
          <div class="padding-sm">
            <el-card class="box-card">
              <UIOptions/>
            </el-card>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-col>
    <el-col :span="7">
      <div class="grid-content"></div>
    </el-col>
  </el-row>
</template>

<script>
  import ProviderOptions from '../options/Provider'
  import GenericOptions from '../options/Generic'
  import PlayerOptions from '../options/Player'
  import UIOptions from '../options/UI'
  import {createPlayer, loadPlayer} from '../../utils/player-loader'
  import {storeSetPlayer, storeUpdateConfig, storeUpdateMediaInfo} from '../../store/mutations-helpers'
  import {getUrlParameter} from '../../utils/url-parameter'
  import {mapGetters} from 'vuex'
  import JSONC from 'jsoncomp'
  import {StorageManager} from '../../utils/storage-manager'

  export default {
    computed: {
      ...mapGetters([
        'runtimeConfig',
        'genericConfig',
        'uiConfig',
        'providerConfig',
        'playerConfig',
        'embedServiceUrl',
        'playerType'
      ])
    },
    components: {
      ProviderOptions,
      GenericOptions,
      PlayerOptions,
      UIOptions
    },
    created() {
      const generatedData = getUrlParameter('generate');
      this.setup = true;
      if (generatedData) {
        const decompressedData = JSONC.decompress(JSON.parse(generatedData));
        storeUpdateConfig(decompressedData.config);
        storeUpdateMediaInfo(decompressedData.mediaInfo);
        this.loadAndCreatePlayer(decompressedData.embedServiceUrl, decompressedData.playerType);
      } else if (StorageManager.hasAppStorage()) {
        const storage = StorageManager.getAppStorage();
        storeUpdateConfig(storage.config);
        this.loadAndCreatePlayer(storage.embedServiceUrl, storage.playerType);
      } else {
        this.setup = false;
      }
    },
    methods: {
      setupPlayer() {
        this.setup = true;
        const runtimeConfig = {
          provider: this.providerConfig,
          player: this.playerConfig,
          ui: this.uiConfig
        };
        storeUpdateConfig(Object.assign(runtimeConfig, this.genericConfig));
        StorageManager.setAppStorage(this.runtimeConfig, this.embedServiceUrl, this.playerType);
        this.loadAndCreatePlayer(this.embedServiceUrl, this.playerType)
      },
      loadAndCreatePlayer(embedServiceUrl, playerType) {
        loadPlayer(embedServiceUrl, playerType)
          .then(() => {
            createPlayer(this.runtimeConfig);
            storeSetPlayer(__kalturaPlayer);
            this.setup = false
          });
      }
    },
    data() {
      return {
        setup: false
      };
    }
  }
</script>
