<template>
  <el-row>
    <el-col :span="4">
      <el-switch @change="onSwitchChanged" v-model="active"/>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      onSwitchChanged() {
        if (this.active) {
          this.$store.commit('addPlugin', {
            name: 'youbora',
            config: this.youbora
          });
        } else {
          this.$store.commit('removePlugin', 'youbora');
        }
      }
    },
    computed: {
      config() {
        return this.$store.state.config.player.plugins;
      }
    },
    data() {
      return {
        active: false,
        youbora: {
          accountCode: 'powerdev'
        }
      };
    }
  }
</script>

<style scoped>

</style>
