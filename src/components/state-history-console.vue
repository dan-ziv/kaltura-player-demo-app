<template>
  <el-row>
    <div class="state-history-console">
      <div v-for="state in stateHistory" :key="state.type" class="text item font-sm">
        <span class="state-info-type">{{state.time}}: {{state.type}}</span>
      </div>
    </div>
  </el-row>
</template>

<script>
  export default {
    computed: {
      player() {
        return this.$store.state.player;
      }
    },
    created() {
      this.player.addEventListener(this.player.Event.SOURCE_SELECTED, () => {
        this.stateHistory = [];
      });
      this.player.addEventListener(this.player.Event.PLAYER_STATE_CHANGED, (e) => {
        this.stateHistory.push({
          time: new Date().toLocaleTimeString(),
          type: e.payload.oldState.type
        });
      });
    },
    updated() {
      const el = this.$el.querySelector('.state-history-console');
      el.scrollTop = el.scrollHeight;
    },
    data() {
      return {
        stateHistory: []
      }
    }
  }
</script>

<style scoped>
  .state-history-console {
    overflow-x: hidden;
    height: 200px;
    overflow-y: scroll;
  }

  .state-info-type {
    color: #4b6eb0;
  }
</style>
