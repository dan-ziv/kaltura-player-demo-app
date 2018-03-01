<template>
  <div>
    <el-tooltip class="item" effect="dark" content="Copy playing source url to clipboard" placement="top-start">
      <el-button class="btn" type="primary" plain :disabled="!src" @click="onClick">Copy Source <i
        class="el-icon-edit-outline"></i>
      </el-button>
    </el-tooltip>
    <div @click="onClick" :id="sourceHiddenDivId" v-show="false">{{src}}</div>
  </div>
</template>

<script>
  import {copyToClipboard} from '../../utils/copy-to-clipboard'

  export default {
    mounted() {
      this.player.addEventListener(this.player.Event.SOURCE_SELECTED, (e) => {
        this.src = e.payload.selectedSource[0].url;
      });
    },
    methods: {
      onClick() {
        copyToClipboard(this.sourceHiddenDivId);
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
        sourceHiddenDivId: 'src-div'
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
