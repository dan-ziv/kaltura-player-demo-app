<template>
  <el-row>
    <center>
      <div id="player-placeholder" class="padding"></div>
    </center>
  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'targetId'
      ])
    },
    mounted() {
      const playerPlaceholder = document.getElementById('player-placeholder');
      const playerContainer = document.getElementById(this.targetId);
      addStyles(playerContainer);
      playerPlaceholder.appendChild(playerContainer);
    }
  }

  function addStyles(playerContainer) {
    playerContainer.style.margin = "10px 10px 10px 10px";
    playerContainer.style.backgroundColor = "white";
    playerContainer.style.height = "360px";
    playerContainer.style.width = "640px";
    playerContainer.style.boxShadow = "2px 2px 8px 0px #88888885";
  }
</script>
