<template>
  <div>
    <h2>Location</h2>
    <div class="label-lists">
      <label class="form-check-label" v-for="(item, index) in filterLocate" :key="item.id">
        <input class="form-check-input" type="checkbox" :v-model="'checked' + index" >
        {{item}}
      </label>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['filterLocate'])
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
    width: 100%;
    margin-bottom: 10px;
  }
}
</style>
