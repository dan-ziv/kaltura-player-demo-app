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
    computed: {
      config() {
        return this.$store.state.config;
      },
    },
    mounted() {
      const playerPlaceholder = document.getElementById('player-placeholder');
      const playerContainer = document.getElementById(this.config.targetId);
      addStyles(playerContainer);
      playerPlaceholder.appendChild(playerContainer);
    }
  }

  function addStyles(playerContainer) {
    playerContainer.style.marginTop = "10px";
    playerContainer.style.backgroundColor = "white";
    playerContainer.style.height = "360px";
    playerContainer.style.width = "640px";
    playerContainer.style.boxShadow = "2px 2px 8px 0px #88888885";
  }
</script>

<style>
</style>
