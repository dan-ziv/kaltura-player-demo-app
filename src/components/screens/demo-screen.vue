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
            <ClearStorageButton
              label="Clear Player Storage"
              :handler="StorageManager.clearPlayerStorage"/>
          </div>
          <div class="padding-sm">
            <ClearStorageButton
              label="Clear App Storage"
              :handler="StorageManager.clearAppStorage"/>
          </div>
        </el-card>
      </el-row>
    </el-col>
    <el-col :span="16">
      <el-row class="padding-sm">
        <el-row class="padding-sm">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Media Info</span>
            </div>
            <MediaInfoConsole/>
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
    <el-col :span="4">
      <el-row class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Playback Values</span>
          </div>
          <PlaybackOptions size="mini" :playerLoaded="true"/>
        </el-card>
      </el-row>
      <el-row class="padding-sm">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Tracks Info</span>
          </div>
          <TracksInfoConsole size="mini"/>
        </el-card>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import MediaInfoConsole from '../consoles/media-info-console'
  import EngineInfoConsole from '../consoles/engine-info-console'
  import StateInfoConsole from '../consoles/state-info-console'
  import StateHistoryConsole from '../consoles/state-history-console'
  import EventConsole from '../consoles/event-console'
  import TracksInfoConsole from '../consoles/tracks-info-console'
  import PlayerPlaceholder from '../player-placeholder'
  import PlaybackOptions from '../options/playback-options'
  import ClearStorageButton from '../buttons/clear-storage'
  import CopySourceButton from '../buttons/copy-source'
  import GeneratePageButton from '../buttons/generate-page'
  import {StorageManager} from '../../utils/storage-manager'

  export default {
    computed: {
      StorageManager() {
        return StorageManager;
      }
    },
    components: {
      MediaInfoConsole,
      EngineInfoConsole,
      StateInfoConsole,
      StateHistoryConsole,
      EventConsole,
      PlayerPlaceholder,
      PlaybackOptions,
      ClearStorageButton,
      TracksInfoConsole,
      CopySourceButton,
      GeneratePageButton
    }
  }
</script>
