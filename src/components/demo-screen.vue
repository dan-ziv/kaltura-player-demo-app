<template>
  <el-container>
    <el-aside width="350px" style="padding-left: 30px;">
      <el-row class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Engine Info</span>
          </div>
          <EngineInfoConsole/>
        </el-card>
      </el-row>
      <el-row class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>State Info</span>
          </div>
          <StateInfoConsole/>
        </el-card>
      </el-row>
      <el-row class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>State History</span>
          </div>
          <StateHistoryConsole/>
        </el-card>
      </el-row>
      <el-row class="padding-sm">
        <LocalStorageButton/>
      </el-row>
    </el-aside>
    <el-main>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Media Info</span>
        </div>
        <MediaInfoContainer/>
      </el-card>
      <PlayerPlaceholder/>
      <el-row class="padding">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Event Monitoring</span>
          </div>
          <EventConsole/>
        </el-card>
      </el-row>
    </el-main>
    <el-aside width="400px" style="padding-right: 50px;">
      <el-row class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Playback Values</span>
          </div>
          <PlaybackOptions size="mini"/>
        </el-card>
      </el-row>
      <el-row class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Tracks Info</span>
          </div>
          <TracksInfo size="mini"/>
        </el-card>
      </el-row>
    </el-aside>
  </el-container>
</template>

<script>
  import MediaInfoContainer from './media-info-container'
  import EngineInfoConsole from './engine-info-console'
  import StateInfoConsole from './state-info-console'
  import StateHistoryConsole from './state-history-console'
  import PlayerPlaceholder from './player-placeholder'
  import EventConsole from './event-console'
  import PlaybackOptions from './playback-options'
  import LocalStorageButton from './local-storage-button'
  import TracksInfo from './tracks-info'

  export default {
    components: {
      MediaInfoContainer,
      EngineInfoConsole,
      StateInfoConsole,
      StateHistoryConsole,
      EventConsole,
      PlayerPlaceholder,
      PlaybackOptions,
      LocalStorageButton,
      TracksInfo
    }
  }
</script>

<style scoped>

</style>
