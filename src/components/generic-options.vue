<template>
  <el-form label-position="left" ref="form" :model="config" label-width="120px">
    <el-form-item label="Target ID">
      <el-input v-model="config.targetId"/>
    </el-form-item>
    <el-form-item label-width="200px" label="Disable User Cache">
      <el-switch v-model="config.disableUserCache"/>
    </el-form-item>
    <el-form-item label-width="200px" label="Log Level">
      <el-select v-model="config.logLevel" placeholder="Select">
        <el-option
          v-for="level in logLevels"
          :key="level[1]"
          :label="level[0]"
          :value="level[1]">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    mounted() {
      const LogLevelType = KalturaPlayer.core.LogLevelType;
      this.logLevels = Object.entries(LogLevelType);
    },
    data() {
      return {
        logLevels: []
      };
    },
    computed: {
      config() {
        return this.$store.state.config;
      }
    }
  }
</script>

<style scoped>

</style>
