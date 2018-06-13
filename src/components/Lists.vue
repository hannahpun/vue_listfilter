<template>
  <div>
    <div class="search-header" v-if="inputSearchTxt != ''">
      <h2>Showing {{inputSearch.length}} results by <span class="main-color">{{inputSearchTxt}}</span></h2>
    </div>
    <!-- {{inputSearch.length}} -->
    <div class="listWrapper">
      <List v-for="list in inputSearch.slice(startNum, endNum)" :key="list.id" :contents="list"></List>
      <div v-if="inputSearch.length > 5">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="inputSearch.length"
          @next-click="clickNext"
          @current-change="clickNext">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import List from '@/components/List'
import {_} from 'vue-underscore'
import { mapState } from 'vuex'

export default {
  name: 'Lists',
  components: { List },
  data () {
    return {
      inputSearchResult: [],
      startNum: 0,
      endNum: 5
    }
  },
  created () {
  },
  computed: {
    ...mapState([
      'listsData', 'inputSearchTxt', 'locateList'
    ]),
    inputSearch () {
      if (this.locateList.length === 0 && this.inputSearchTxt.length < 1) {
        return this.listsData
      } else {
        return _.filter(this.listsData, lists => {
          return _.contains(this.locateList, lists.Zone) && (lists.Name.indexOf(this.inputSearchTxt) !== -1 || lists.Description.indexOf(this.inputSearchTxt) !== -1)
        })
      }
    }
  },
  methods: {
    clickNext (page) {
      this.startNum = page * 5 - 5
      this.endNum = page * 5
    }
  }
}
</script>

<style scoped lang="scss">
.search-header{
  margin-bottom: 25px;
}
.search-category{
  display: flex;
  margin-top: 10px;
}
.tag-category{
  border: 1px solid $purple;
  color: $purple;
  background-color: transparent;
  margin-right: 10px;
}
.el-pagination{
  text-align: right;
}
</style>
