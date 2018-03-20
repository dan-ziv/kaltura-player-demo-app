<template>
  <el-row>
    <center>
      <h1>{{title}}</h1>
      <h3>Demo Page</h3>
      <el-row class="version">
        <el-tag v-if="player">v{{version}}</el-tag>
      </el-row>
      <p class="links">
        <a v-bind:href="docsUrl" target="_blank">Documentation</a> |
        <a v-bind:href="repoUrl" target="_blank">Repo</a> |
        <a v-bind:href="releasesUrl" target="_blank">Releases</a>
      </p>
    </center>
  </el-row>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      version() {
        return KalturaPlayer.VERSION;
      },
      ...mapState([
        'player'
      ])
    },
    data() {
      return {
        title: 'kaltura-player-js',
        repoUrl: '//github.com/kaltura/kaltura-player-js',
        docsUrl: '//github.com/kaltura/kaltura-player-js#documentation',
        releasesUrl: '//github.com/kaltura/kaltura-player-js/releases'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: dodgerblue;
    background-color: #f3f3f3;
    border-radius: 30px;
    margin-top: 5px;
  }

  h3 {
    color: #115fa4;
    background-color: #f0f0f075;
    border-radius: 30px;
  }

  p {
    color: #444;
    font-size: 0.9em;
    font-weight: 300;
    line-height: 1.6em;
  }

  .version {
    background-color: #fafafa;
    border-radius: 20px;
  }

  .links {
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    margin: 1.5em 0 1.5em 0;
    padding: 0.5em 0 0.5em 0;
    margin: 0.5em 0;
  }
</style>
