<template>
  <el-row>
    <el-col :span="4">
      <el-switch @change="onSwitchChanged" v-model="active"/>
    </el-col>
    <el-col :span="20">
      <el-input v-if="active" v-model="ima.adTagUrl" @change="onAdTagChanged" placeholder="Enter Ad Tag Url"/>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    methods: {
      onAdTagChanged() {
        this.$store.commit('updateAdTagUrl', this.ima.adTagUrl);
      },
      onSwitchChanged() {
        if (this.active) {
          this.$store.commit('addPlugin', {
            name: 'ima',
            config: this.ima
          });
        } else {
          this.$store.commit('removePlugin', 'ima');
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
        ima: {
          adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator='
        }
      };
    }
  }
</script>

<style scoped>

</style>
