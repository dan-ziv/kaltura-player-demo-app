<template>
  <el-form label-position="left" ref="form" :model="config" label-width="120px">
    <el-form-item label="Partner ID">
      <el-input v-model="config.provider.partnerId"/>
    </el-form-item>
    <el-form-item label="Service Url">
      <el-input v-model="config.provider.env.serviceUrl"/>
    </el-form-item>
    <el-form-item label="CDN Url">
      <el-input v-model="config.provider.env.cdnUrl"/>
    </el-form-item>
    <el-form-item label="KS">
      <el-input v-model="config.provider.ks"/>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    computed: {
      config() {
        return this.$store.state.config;
      }
    }
  }
</script>

<style scoped>

</style>
