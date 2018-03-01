<template>
  <el-row>
    <el-col :span="4">
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
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Page Actions</span>
          </div>
          <div class="padding-sm">
            <GeneratePageButton/>
          </div>
          <div class="padding-sm">
            <CopySourceButton/>
          </div>
          <div class="padding-sm">
            <LocalStorageButton/>
          </div>
        </el-card>
      </el-row>
    </el-col>
    <el-col :span="15">
      <el-row class="padding-sm">
        <el-row class="padding-sm">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Media Info</span>
            </div>
            <MediaInfoContainer/>
          </el-card>
        </el-row>
        <PlayerPlaceholder/>
        <el-row class="padding-sm">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Event Monitoring</span>
            </div>
            <EventConsole/>
          </el-card>
        </el-row>
      </el-row>
    </el-col>
    <el-col :span="5">
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
    </el-col>
  </el-row>
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
  import CopySourceButton from './copy-source'
  import GeneratePageButton from './generate-page'

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
      TracksInfo,
      CopySourceButton,
      GeneratePageButton
    }
  }
</script>

<style scoped>

</style>
