<template>
  <el-form label-position="left" ref="form" label-width="120px">
    <el-form-item label="Plugins">
      <br>
      <PluginsConfig/>
    </el-form-item>
    <el-form-item label="Playback">
      <br>
      <PlaybackOptions :playerLoaded="playerLoaded"/>
    </el-form-item>
  </el-form>
</template>

<script>
  import PlaybackOptions from './playback-options'
  import PluginsConfig from './plugins-config'

  export default {
    props: ['playerLoaded'],
    components: {
      PlaybackOptions,
      PluginsConfig
    }
  }
</script>
