<template>
  <el-row>
    <el-col :span="2">
      <div class="grid-content"></div>
    </el-col>
    <el-col :span="13">
      <div id="player-placeholder" class="padding"></div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    mounted() {
      const playerPlaceholder = document.getElementById('player-placeholder');
      const playerContainer = document.getElementById('player-container');
      playerPlaceholder.appendChild(playerContainer);
    }
  }
</script>

<style>
  #player-container {
    margin-top: 10px;
    background-color: white;
    height: 360px;
    width: 640px;
    box-shadow: 2px 2px 8px 0px #88888885;
  }
</style>
