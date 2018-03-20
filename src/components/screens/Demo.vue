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
    <el-col :span="15">
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
    <el-col :span="5">
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
  import MediaInfoConsole from '../consoles/MediaInfo'
  import EngineInfoConsole from '../consoles/EngineInfo'
  import StateInfoConsole from '../consoles/StateInfo'
  import StateHistoryConsole from '../consoles/StateHistory'
  import EventConsole from '../consoles/Event'
  import TracksInfoConsole from '../consoles/TracksInfo'
  import PlayerPlaceholder from '../PlayerPlaceholder'
  import PlaybackOptions from '../options/Playback'
  import ClearStorageButton from '../buttons/ClearStorage'
  import CopySourceButton from '../buttons/CopySource'
  import GeneratePageButton from '../buttons/GeneratePage'
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
