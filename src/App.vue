<template>
  <div id="app">
    <el-container>
      <el-header height="200px">
        <HeaderInfoContainer/>
      </el-header>
      <SetupScreen v-if="!player"/>
      <DemoScreen v-if="player"/>
    </el-container>
  </div>
</template>

<script>
  import SetupScreen from './components/screens/Setup'
  import DemoScreen from './components/screens/Demo'
  import HeaderInfoContainer from './components/HeaderContainer'
  import {mapGetters} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters([
        'player'
      ])
    },
    components: {
      HeaderInfoContainer,
      SetupScreen,
      DemoScreen
    }
  }
</script>

<style>
  body {
    font-family: 'Barlow';
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
