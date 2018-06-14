<template>
  <div>
    <h2>Location</h2>
    <div class="label-lists">
      <label class="form-check-label" v-for="(item) in filterLocate" :key="item.id">
        <input class="form-check-input" type="checkbox" :value="item" v-model="checkedLocate">
        {{item}}
      </label>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      checkedLocate: []
    }
  },
  watch: {
    checkedLocate (val) {
      this.CHECK_LOCATE(val)
    }
  },
  computed: {
    ...mapGetters(['filterLocate']),
    ...mapState([
      'locateList'
    ])
  },
  methods: {
    ...mapMutations(['CHECK_LOCATE'])
  }
}
</script>

<style scoped lang="scss">
h2{
    margin-bottom: 20px;
}
.label-lists{
  display: flex;
  flex-wrap: wrap;
  label{
    width: 50%;
    margin-bottom: 10px;
    @include mobile(){
      width: 33.3%;
    }
  }
}
</style>
