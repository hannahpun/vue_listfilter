<template>
  <div>
    <div class="search-header" v-if="inputSearchTxt != ''">
      <h2>Showing {{inputSearch.length}} results by <span class="main-color">{{inputSearchTxt}}</span></h2>
    </div>
    <div class="listWrapper">
      <List v-for="list in inputSearch" :key="list.id" :contents="list"></List>
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
      inputSearchResult: []
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
</style>
