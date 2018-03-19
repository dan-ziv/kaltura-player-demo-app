<template>
  <el-row>
    <el-tooltip class="item" effect="dark" content="Clear the browser's local storage" placement="top-start">
      <el-button type="primary" plain :loading="loading" @click="clearStorage">{{label}} <i
        class="el-icon-delete"></i>
      </el-button>
    </el-tooltip>
  </el-row>
</template>

<script>
  export default {
    props: ['label', 'handler'],
    methods: {
      clearStorage() {
        this.loading = true;
        this.handler();
        setTimeout(() => this.loading = false, 500);
      }
    },
    data() {
      return {
        loading: false
      };
    }
  }
</script>
