<template>
  <el-row>
    <el-row>
      <el-col :span="5">
        <div style="float: right">
          <el-dropdown @command="onPrioritySelected">
            <el-button type="primary">
              {{streamPriority[0].data.format.toUpperCase()}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="priority in streamPriority"
                                :key="priority.data.format"
                                :value="priority.data.format"
                                :command="priority">
                {{priority.data.format.toUpperCase()}}
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col :span="14">
        <el-autocomplete style="width:100%;"
                         class="inline-input"
                         v-model="entry"
                         :fetch-suggestions="querySearch"
                         placeholder="Enter .mpd/.m3u8/.mp4 URL or a valid entry ID">
          <template slot-scope="props">
            <div class="value">{{props.item.value}} - {{props.item.description}}</div>
          </template>
        </el-autocomplete>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" :loading="isLoadingMedia" v-on:click="onLoadClicked">LOAD MEDIA</el-button>
      </el-col>
    </el-row>
    <el-row>
      <div class="padding-sm">
        <el-col :span="6">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="11">
          <el-collapse>
            <el-collapse-item title="Provider Options" name="provider-options">
              <el-form label-position="left" ref="form" size="mini" :model="options" label-width="120px">
                <el-form-item label="KS">
                  <el-input v-model="options.ks"/>
                </el-form-item>
                <div v-if="isOTT()">
                  <el-form-item label="Media Type">
                    <el-select :default-first-option="true" v-model="options.mediaType" placeholder="Select">
                      <el-option
                        v-for="media in mediaTypes"
                        :key="media[1]"
                        :label="media[0]"
                        :value="media[1]">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Context Type">
                    <el-select :default-first-option="true" v-model="options.contextType" placeholder="Select">
                      <el-option
                        v-for="context in contextTypes"
                        :key="context[1]"
                        :label="context[0]"
                        :value="context[1]">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Protocol">
                    <el-input placeholder="http/https" v-model="options.protocol"/>
                  </el-form-item>
                  <el-form-item label="File Ids">
                    <el-input placeholder="fileId1, fileId2" v-model="options.fileIds"/>
                  </el-form-item>
                  <el-form-item label="Formats">
                    <el-select
                      v-model="options.formats"
                      multiple
                      filterable
                      allow-create
                      default-first-option
                      no-data-text="..."
                      placeholder="Choose formats">
                    </el-select>
                  </el-form-item>
                </div>
              </el-form>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </div>
    </el-row>
  </el-row>
</template>

<script>
  import Entries from '../../data/entries'
  import {mapGetters} from 'vuex'
  import {storeUpdateMediaInfo} from '../../store/mutations-helpers'

  export default {
    computed: {
      ...mapGetters([
        'player',
        'mediaInfo',
        'partnerId'
      ])
    },
    mounted() {
      if (this.partnerId === 1091) {
        this.entries = Entries;
      }
      if (this.isOTT()) {
        const ContextType = KalturaPlayer.providers.ContextType;
        const MediaType = KalturaPlayer.providers.MediaType;
        this.contextTypes = Object.entries(ContextType);
        this.mediaTypes = Object.entries(MediaType);
        this.options.contextType = ContextType.PLAYBACK;
        this.options.mediaType = MediaType.MEDIA;
      }
      if (this.mediaInfo) {
        this.isLoadingMedia = true;
        this.player.loadMedia(this.mediaInfo).then(() => {
          const priority = this.streamPriority.find(p => p.data.format === this.player.streamType);
          this.onPrioritySelected(priority);
          this.entry = this.mediaInfo.entryId;
          this.isLoadingMedia = false;
        });
      }
    },
    methods: {
      isOTT() {
        return KalturaPlayer.PLAYER_TYPE === 'ott';
      },
      querySearch(queryString, cb) {
        const entries = this.entries;
        const results = queryString ? entries.filter(this.createFilter(queryString)) : entries;
        cb(results);
      },
      createFilter(queryString) {
        return (entry) => {
          return (entry.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0) ||
            (entry.description.toLowerCase().includes(queryString.toLowerCase()));
        };
      },
      onLoadClicked() {
        if (!this.entry) return;
        this.isLoadingMedia = true;
        this.configureStreamPriority();
        if (this.entry.includes('.')) {
          this.configureSource();
          setTimeout(() => this.isLoadingMedia = false, 500);
        } else {
          const mediaInfo = {
            entryId: this.entry
          };
          if (this.options.ks) mediaInfo.ks = this.options.ks;
          if (this.isOTT()) {
            if (this.options.contextType) mediaInfo.contextType = this.options.contextType;
            if (this.options.mediaType) mediaInfo.mediaType = this.options.mediaType;
            if (this.options.fileIds) mediaInfo.fileIds = this.options.fileIds;
            if (this.options.protocol) mediaInfo.protocol = this.options.protocol;
            if (this.options.formats) mediaInfo.formats = this.options.formats;
          }
          storeUpdateMediaInfo(mediaInfo);
          this.player.loadMedia(mediaInfo).then(() => this.isLoadingMedia = false);
        }
      },
      onPrioritySelected(selectedPriority) {
        const index = this.streamPriority.findIndex(sp => sp.data.format === selectedPriority.data.format);
        if (index > -1) {
          this.streamPriority.splice(index, 1);
        }
        this.streamPriority.unshift(selectedPriority);
      },
      configureSource() {
        this.player.configure({
          sources: {
            [this.streamPriority[0].data.format]: [{
              mimetype: this.streamPriority[0].mimetype,
              url: this.entry
            }]
          }
        });
      },
      configureStreamPriority() {
        this.player.configure({
          playback: {
            streamPriority: this.streamPriority.map(sp => sp.data)
          }
        });
      }
    },
    data() {
      return {
        entries: [],
        contextTypes: [],
        mediaTypes: [],
        isLoadingMedia: false,
        entry: null,
        options: {
          ks: '',
          protocol: '',
          contextType: '',
          mediaType: '',
          fileIds: '',
          formats: []
        },
        streamPriority: [{
          mimetype: 'application/x-mpegURL',
          data: {
            engine: 'html5',
            format: 'hls'
          }
        }, {
          mimetype: 'application/dash+xml',
          data: {
            engine: 'html5',
            format: 'dash'
          }
        }, {
          mimetype: 'video/mp4',
          data: {
            engine: 'html5',
            format: 'progressive'
          }
        }]
      }
    }
  }
</script>
