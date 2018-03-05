<template>
  <el-form label-position="left" ref="form" :model="config" label-width="120px">
    <el-form-item label="Partner ID">
      <el-input v-model="config.partnerId"/>
    </el-form-item>
    <el-form-item label="UI Conf ID">
      <el-input v-model="config.uiConfId"/>
    </el-form-item>
    <el-form-item label="KS">
      <el-input v-model="config.ks"/>
    </el-form-item>
    <el-form-item label="Service Url">
      <el-input v-model="config.env.serviceUrl"/>
    </el-form-item>
    <el-form-item label="CDN Url">
      <el-input v-model="config.env.cdnUrl"/>
    </el-form-item>
  </el-form>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters({
      config: 'providerConfig'
    })
  }
</script>

<style scoped>

</style>
