<template>
  <el-form label-position="left" ref="form" :model="config" label-width="120px">
    <el-form-item label-width="200px" label="Force Touch UI">
      <el-switch v-model="config.forceTouchUI"/>
    </el-form-item>
  </el-form>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        config: 'uiConfig'
      })
    }
  }
</script>
