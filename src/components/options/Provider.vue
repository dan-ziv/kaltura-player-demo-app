<template>
  <el-form label-position="left" ref="form" :model="config" label-width="120px">
    <el-form-item label="Embed Service Url" label-width="130px">
      <el-input @change="onEmbedServiceInput"/>
    </el-form-item>
    <el-form-item label="Player Type">
      <el-dropdown @command="onPlayerTypeSelected">
        <el-button v-bind:disabled="!!embedServiceUrl" type="primary">
          {{playerType.toUpperCase()}}<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="type in playerTypes"
                            :key="type"
                            :value="type"
                            :command="type">
            {{type.toUpperCase()}}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-form-item>
    <el-form-item label="Partner ID">
      <el-input v-bind:disabled="!!embedServiceUrl" v-model="config.partnerId"/>
    </el-form-item>
    <el-form-item label="UI Conf ID">
      <el-input v-bind:disabled="!!embedServiceUrl" v-model="config.uiConfId"/>
    </el-form-item>
    <el-form-item label="KS">
      <el-input v-model="config.ks"/>
    </el-form-item>
    <el-form-item label="Service Url">
      <el-input v-bind:disabled="!!embedServiceUrl" v-model="config.env.serviceUrl"/>
    </el-form-item>
    <el-form-item label="CDN Url">
      <el-input v-bind:disabled="!!embedServiceUrl" v-model="config.env.cdnUrl"/>
    </el-form-item>
  </el-form>
</template>

<script>
  import {storeUpdatePlayerType, storeUpdateEmbedServiceUrl} from '../../store/mutations-helpers'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        config: 'providerConfig',
        playerType: 'playerType',
        embedServiceUrl: 'embedServiceUrl'
      })
    },
    methods: {
      onPlayerTypeSelected(type) {
        storeUpdatePlayerType(type);
      },
      onEmbedServiceInput(value) {
        if (!this.embedServiceRegex.test(value)) {
          storeUpdateEmbedServiceUrl('');
        } else {
          const match = value.match(this.embedServiceRegex);
          const uiConfId = match[1];
          const partnerId = match[2];
          this.config.uiConfId = uiConfId;
          this.config.partnerId = partnerId;
          storeUpdateEmbedServiceUrl(value);
        }
      }
    },
    data() {
      return {
        playerTypes: ['ovp', 'ott'],
        embedServiceRegex: /\/p\/\d+\/sp\/\d+\/embedPlaykitJs\/uiconf_id\/(\d+)\/partner_id\/(\d+)/
      };
    }
  }
</script>
