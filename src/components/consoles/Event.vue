<template>
  <el-row>
    <el-row>
      <el-col :span="18">
        <div style="margin-bottom: 5px;">
          <el-input placeholder="Filter..." v-model="filter"/>
        </div>
      </el-col>
      <el-col :span="6">
        <el-button type="danger" @click="events=[]">Clear <i class="el-icon-delete"></i></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table
        :data="filteredEvents"
        :default-sort="{prop: 'time', order: 'descending'}"
        max-height="500"
        empty-text="No Data"
        class="event-table">
        <el-table-column type="expand">
          <template slot-scope="props">
            <pre v-if="props.row.payload">{{JSON.stringify(props.row.payload || {}, null, 2)}}</pre>
          </template>
        </el-table-column>
        <el-table-column
          sortable
          prop="index"
          label="#"
          width="200">
        </el-table-column>
        <el-table-column
          sortable
          prop="time"
          label="Time"
          width="250">
        </el-table-column>
        <el-table-column
          sortable
          prop="type"
          label="Type">
        </el-table-column>
      </el-table>
    </el-row>
  </el-row>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'player'
      ]),
      filteredEvents() {
        return this.events.filter(event => {
          return event.type.indexOf(this.filter.toLowerCase()) > -1;
        });
      }
    },
    created() {
      Object.values(KalturaPlayer.core.EventType)
        .forEach((event) => {
          if (!this.ignoredEvents.includes(event)) {
            this.player.addEventListener(event, (e) => {
              this.events.push({
                index: this.index++,
                time: new Date().toLocaleTimeString(),
                type: e.type,
                payload: e.payload
              });
            });
          }
        });
    },
    data() {
      return {
        index: 1,
        filter: '',
        ignoredEvents: [
          KalturaPlayer.core.EventType.TIME_UPDATE,
          KalturaPlayer.core.EventType.PROGRESS,
          KalturaPlayer.core.EventType.STALLED
        ],
        events: []
      };
    }
  }
</script>

<style scoped>
  .event-table {
    overflow-x: hidden;
  }
</style>
