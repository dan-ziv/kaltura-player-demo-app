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
  import ImaPlugin from '../plugins/Ima'
  import YouboraPlugin from '../plugins/Youbora'

  export default {
    components: {
      YouboraPlugin,
      ImaPlugin
    }
  }
</script>
