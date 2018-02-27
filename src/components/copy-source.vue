<template>
  <div>
    <el-tooltip class="item" effect="dark" content="Copy playing source url to clipboard" placement="top-start">
      <el-button class="btn" type="info" round :disabled="!src" @click="onClick">Copy Source <i
        class="el-icon-edit-outline"></i>
      </el-button>
    </el-tooltip>
    <input id="src-text" title="src" type="text" :value="src" v-show="copying"/>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.player.addEventListener(this.player.Event.SOURCE_SELECTED, (e) => {
        this.src = e.payload.selectedSource[0].url;
      });
    },
    methods: {
      onClick() {
        this.copying = true;
        const input = document.getElementById("src-text");
        input.select();
        document.execCommand("copy");
        this.copying = false;
      }
    },
    computed: {
      player() {
        return this.$store.state.player;
      }
    },
    data() {
      return {
        src: '',
        copying: false
      };
    }
  }
</script>

<style scoped>
  .btn {
    width: 230px;
    max-width: 230px;
  }
</style>
