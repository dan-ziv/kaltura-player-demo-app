<template>
  <el-row>
    <el-tooltip class="item" effect="dark" content="Clear the browser's local storage" placement="top-start">
      <el-button type="info" :loading="loading" @click="clearStorage">Clear Storage <i class="el-icon-delete"></i>
      </el-button>
    </el-tooltip>
  </el-row>
</template>

<script>
  export default {
    methods: {
      clearStorage() {
        this.loading = true;
        if (localStorage) {
          localStorage.clear();
        }
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

<style>
</style>
