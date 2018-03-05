<template>
  <el-row>
    <el-col :span="4">
      <el-switch @change="onSwitchChanged" v-model="active"/>
    </el-col>
  </el-row>
</template>

<script>
  import {storeAddPlugin, storeRemovePlugin} from '../../store/mutations-helpers'
  import {mapGetters} from 'vuex'

  export default {
    methods: {
      onSwitchChanged() {
        if (this.active) {
          storeAddPlugin({
            name: 'youbora',
            config: this.youbora
          });
        } else {
          storeRemovePlugin('youbora');
        }
      }
    },
    computed: mapGetters({
      config: 'youboraConfig'
    }),
    created() {
      if (this.config) {
        this.active = true;
        this.youbora = this.config;
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
