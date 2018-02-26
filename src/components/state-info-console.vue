<template>
  <el-row>
    <div class="text item font-sm">
      <b>Previous State:</b> <span class="state-info-type">{{previousState}}</span>
    </div>
    <div class="text item font-sm">
      <b>Current State:</b> <span class="state-info-type">{{currentState}}</span>
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
      this.player.addEventListener(this.player.Event.PLAYER_STATE_CHANGED, (e) => {
        this.currentState = e.payload.newState.type;
        this.previousState = e.payload.oldState.type;
      });
    },
    data() {
      return {
        currentState: '',
        previousState: ''
      }
    }
  }
</script>

<style scoped>
  .state-info-type {
    color: #4b6eb0;
  }
</style>
