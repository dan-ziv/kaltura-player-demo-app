<template>
  <el-row>
    <el-row>
      <el-col :span="5">
        <div style="float: right">
          <el-dropdown @command="onPrioritySelected">
            <el-button type="primary">
              {{selectedPriority.value}}<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="priority in streamPriority"
                                :key="priority.value"
                                :value="priority.data"
                                :command="priority">
                {{priority.value}}
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
                  <el-input v-model="options.ks"></el-input>
                </el-form-item>
                <div v-if="isOTT()">
                  <el-form-item label="Media Type">
                    <el-select default-first-option="true" v-model="options.mediaType" placeholder="Select">
                      <el-option
                        v-for="media in mediaTypes"
                        :key="media[1]"
                        :label="media[0]"
                        :value="media[1]">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Context Type">
                    <el-select default-first-option="true" v-model="options.contextType" placeholder="Select">
                      <el-option
                        v-for="context in contextTypes"
                        :key="context[1]"
                        :label="context[0]"
                        :value="context[1]">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="Protocol">
                    <el-input placeholder="http/https" v-model="options.protocol"></el-input>
                  </el-form-item>
                  <el-form-item label="File Ids">
                    <el-input placeholder="fileId1, fileId2" v-model="options.fileIds"></el-input>
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
  import StreamPriority from '../../data/stream-priority'
  import Entries from '../../data/entries'

  export default {
    computed: {
      player() {
        return this.$store.state.player;
      }
    },
    mounted() {
      this.entries = Entries;
      if (this.isOTT()) {
        const ContextType = KalturaPlayer.providers.ContextType;
        const MediaType = KalturaPlayer.providers.MediaType;
        this.contextTypes = Object.entries(ContextType);
        this.mediaTypes = Object.entries(MediaType);
        this.options.contextType = ContextType.PLAYBACK;
        this.options.mediaType = MediaType.MEDIA;
      }
    },
    methods: {
      isOTT() {
        return KalturaPlayer.PLAYER_TYPE === "ott";
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
        this.isLoadingMedia = true;
        const entryOrManifest = this.entry || this.entries[0].value;
        this.configureStreamPriority();
        if (entryOrManifest.includes('.')) {
          this.configureSource();
          setTimeout(() => this.isLoadingMedia = false, 500);
        } else {
          const mediaInfo = {
            entryId: entryOrManifest
          };
          if (this.options.ks) mediaInfo.ks = this.options.ks;
          if (this.isOTT()) {
            if (this.options.contextType) mediaInfo.contextType = this.options.contextType;
            if (this.options.mediaType) mediaInfo.mediaType = this.options.mediaType;
            if (this.options.fileIds) mediaInfo.fileIds = this.options.fileIds;
            if (this.options.protocol) mediaInfo.protocol = this.options.protocol;
            if (this.options.formats) mediaInfo.formats = this.options.formats;
          }
          this.player.loadMedia(mediaInfo)
            .then(() => this.isLoadingMedia = false);
        }
      },
      onPrioritySelected(priority) {
        this.selectedPriority = priority;
      },
      configureSource() {
        this.player.configure({
          sources: {
            [this.selectedPriority.value.toLowerCase()]: [{
              mimetype: this.selectedPriority.mimetype,
              url: this.entry
            }]
          }
        });
      },
      configureStreamPriority() {
        this.player.configure({
          playback: {
            streamPriority: [
              this.selectedPriority.data
            ]
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
        entry: '',
        options: {
          ks: '',
          protocol: '',
          contextType: '',
          mediaType: '',
          fileIds: '',
          formats: []
        },
        selectedPriority: StreamPriority.Hls,
        streamPriority: [
          StreamPriority.Hls,
          StreamPriority.Dash,
          StreamPriority.Progressive
        ]
      }
    }
  }
</script>

<style>
</style>
