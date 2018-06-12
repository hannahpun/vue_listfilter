<template>
  <div>
    <div class="input-searchWrapper">
      <i class="el-icon-search"></i>
      <input class="input-search" type="search" v-model="inputSearch">
    </div>
    <div class="search-header">
      <h2>Showing 15 results by…</h2>
      <div class="search-category">
        <p class="tag-category">Entertainment</p>
        <p class="tag-category">Entertainment</p>
      </div>
      </div>
      <div class="listWrapper">
        <List v-for="list in listData" :key="list.id" :contents="list"></List>
      </div>
  </div>
</template>
modal
<script>
import List from '@/components/List'
export default {
  name: 'Lists',
  data () {
    return {
      restaurants: [],
      inputSearch: '',
      listData: ''
    }
  },
  created () {
    const vm = this
    let api = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'
    vm.$http.get(api).then(res => {
      vm.listData = res.data && res.data.result.records
    }).catch(error => {
      console.log(error)
    })
  },
  mounted () {
    this.restaurants = this.listData
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
