<template>
  <div>
    <el-form-item label="IMA" label-width="80px">
      <ImaPlugin/>
    </el-form-item>
    <el-form-item label="Youbora" label-width="80px">
      <YouboraPlugin/>
    </el-form-item>
  </div>
</template>

<script>
  import ImaPlugin from './ima-plugin'
  import YouboraPlugin from './youbora-plugin'

  export default {
    components: {
      YouboraPlugin,
      ImaPlugin
    }
  }
</script>

<style scoped>

</style>
