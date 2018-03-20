<template>
  <el-form label-position="left" ref="form" label-width="200px">
    <el-form-item label="Text Language">
      {{textLanguage}}
    </el-form-item>
    <el-form-item label="Audio Language">
      {{audioLanguage}}
    </el-form-item>
    <el-form-item label="ABR Mode">
      {{abrMode}}
    </el-form-item>
    <el-form-item label="Current Bitrate">
      {{currentBitrate}}
    </el-form-item>
  </el-form>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    created() {
      this.player.addEventListener(this.player.Event.TRACKS_CHANGED, (e) => {
        const activeTracks = this.player.getActiveTracks();
        this.currentBitrate = activeTracks.video.bandwidth;
        if (activeTracks.audio) {
          this.audioLanguage = activeTracks.audio.label;
        }
        if (activeTracks.text) {
          this.textLanguage = activeTracks.text.label;
        }
      });
      this.player.addEventListener(this.player.Event.ABR_MODE_CHANGED, (e) => {
        this.abrMode = e.payload.mode;
      });
      this.player.addEventListener(this.player.Event.AUDIO_TRACK_CHANGED, (e) => {
        this.audioLanguage = e.payload.selectedAudioTrack.label;
      });
      this.player.addEventListener(this.player.Event.TEXT_TRACK_CHANGED, (e) => {
        this.textLanguage = e.payload.selectedTextTrack.label;
      });
      this.player.addEventListener(this.player.Event.VIDEO_TRACK_CHANGED, (e) => {
        this.currentBitrate = e.payload.selectedVideoTrack.bandwidth;
      });
    },
    computed: {
      ...mapGetters([
        'player'
      ])
    },
    data() {
      return {
        audioLanguage: 'N/A',
        textLanguage: 'N/A',
        currentBitrate: -1,
        abrMode: 'N/A'
      };
    }
  }
</script>
