<template>
  <div>
    <div class="input-searchWrapper">
      <i class="el-icon-search"></i>
      <input class="input-search" type="search" v-model="inputSearch">
      {{inputSearch}}
    </div>
    <div class="search-header">
      <h2>Showing 15 results by…</h2>
      <!-- <div class="search-category">
        <p class="tag-category">Entertainment</p>
        <p class="tag-category">Entertainment</p>
      </div> -->
      </div>
      <div class="listWrapper">
        <List v-for="list in inputSearchResult" :key="list.id" :contents="list"></List>
      </div>
  </div>
</template>
modal
<script>
import List from '@/components/List'
import {_} from 'vue-underscore'
export default {
  name: 'Lists',
  data () {
    return {
      inputSearch: '',
      listData: '',
      inputSearchResult: []
    }
  },
  created () {
    const vm = this
    let api = 'http://www.mocky.io/v2/5b1ff2c0310000bf2d230a8f'
    vm.$http.get(api).then(res => {
      this.listData = res.data && res.data
      this.inputSearchResult = this.listData
      debugger
    }).catch(error => {
      console.log(error)
    })
  },
  watch: {
    inputSearch (txt) {
      this.inputSearchResult = _.filter(this.listData, lists => {
        return lists.Name.indexOf(txt) !== -1 || lists.Description.indexOf(txt) !== -1
      })
    }
  },
  computed: {
  },
  components: { List },
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
