<template>
  <div>
    <div class="search-header">
      <h2>Showing 15 results by…</h2>
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
      'listsData', 'inputSearchTxt'
    ]),
    inputSearch () {
      return _.filter(this.listsData, lists => {
        return lists.Name.indexOf(this.inputSearchTxt) !== -1 || lists.Description.indexOf(this.inputSearchTxt) !== -1
      })
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
