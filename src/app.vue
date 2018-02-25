<template>
  <div id="app">
    <el-container>
      <el-header height="200px">
        <HeaderInfoContainer/>
      </el-header>
      <el-container>
        <el-aside width="350px" style="padding-left: 30px;">
          <el-row class="padding-sm">
            <EngineInfoConsole :playerObj="player"/>
          </el-row>
          <el-row class="padding-sm">
            <StateInfoConsole :playerObj="player"/>
          </el-row>
          <el-row class="padding-sm">
            <StateHistoryConsole :playerObj="player"/>
          </el-row>
        </el-aside>
        <el-main>
          <MediaInfoContainer :playerObj="player"/>
          <PlayerContainer/>
          <el-row class="padding">
            <EventConsole :playerObj="player"/>
          </el-row>
        </el-main>
        <el-aside width="400px" style="padding-right: 50px;">
          <el-row>
            <div class="grid-content"></div>
          </el-row>
          <el-row>
            <div class="grid-content"></div>
          </el-row>
          <el-row class="padding-sm">
            <LocalStorageButton/>
          </el-row>
          <el-row class="padding-sm">
            <PlaybackOptions :playerObj="player"/>
          </el-row>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import HeaderInfoContainer from './components/header-info-container'
  import MediaInfoContainer from './components/media-info-container'
  import EngineInfoConsole from './components/engine-info-console'
  import StateInfoConsole from './components/state-info-console'
  import StateHistoryConsole from './components/state-history-console'
  import PlayerContainer from './components/player-container'
  import EventConsole from './components/event-console'
  import PlaybackOptions from './components/playback-options'
  import LocalStorageButton from './components/local-storage-button'
  import Config from './data/config'

  export default {
    name: 'App',
    data() {
      return {
        player: null
      };
    },
    beforeMount() {
      const playerContainer = document.createElement('div');
      playerContainer.id = 'player-container';
      document.body.appendChild(playerContainer);
      this.player = KalturaPlayer.setup(Config);
      player = this.player;
    },
    components: {
      HeaderInfoContainer,
      MediaInfoContainer,
      EngineInfoConsole,
      StateInfoConsole,
      StateHistoryConsole,
      EventConsole,
      PlayerContainer,
      PlaybackOptions,
      LocalStorageButton
    }
  }
</script>

<style>
  body {
    font-family: Menlo;
    width: 100%;
    overflow-x: hidden;
  }

  pre {
    overflow-x: hidden;
  }

  select {
    text-align-last: center;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .padding-sm {
    padding-top: 5px;
    padding-left: 5px;
    margin-top: 5px;
  }

  .padding {
    padding-top: 10px;
    padding-left: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .font-sm {
    margin: 3px;
    font-size: 14px;
  }
</style>
