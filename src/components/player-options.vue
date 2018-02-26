<template>
  <el-form label-position="left" ref="form" :model="config" label-width="120px">
    <el-form-item label="Plugins">
      <br>
      <el-form-item label="IMA" label-width="80px">
        <el-row>
          <el-col :span="4">
            <el-switch @change="onImaSwitchChanged" v-model="ima.active"/>
          </el-col>
          <el-col :span="20">
            <el-input v-if="ima.active" v-model="ima.adtag" @change="onAdTagChanged" :placeholder="ima.adtag"/>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="Youbora" label-width="80px">
        <el-row>
          <el-col :span="4">
            <el-switch @change="onYouboraSwitchChanged" v-model="youbora.active"/>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form-item>
    <el-form-item label="Playback">
      <br>
      <PlaybackOptions beforeSetup="true" size=""/>
    </el-form-item>
  </el-form>
</template>

<script>
  import PlaybackOptions from './playback-options'

  export default {
    methods: {
      addPlugin(name, config) {
        this.$store.commit('addPlugin', {
          name: name,
          config: config || {}
        });
      },
      removePlugin(name) {
        this.$store.commit('removePlugin', name);
      },
      onAdTagChanged() {
        this.$store.commit('updateAdTagUrl', this.ima.adtag);
      },
      onImaSwitchChanged() {
        if (this.ima.active) {
          this.addPlugin('ima', {adTagUrl: this.ima.adtag});
        } else {
          this.removePlugin('ima');
        }
      },
      onYouboraSwitchChanged() {
        if (this.youbora.active) {
          this.addPlugin('youbora');
        } else {
          this.removePlugin('youbora');
        }
      }
    },
    computed: {
      config() {
        return this.$store.state.config;
      }
    },
    data() {
      return {
        youbora: {
          active: false
        },
        ima: {
          active: false,
          adtag: '//pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator='
        },
      };
    },
    components: {
      PlaybackOptions
    }
  }
</script>

<style scoped>

</style>
