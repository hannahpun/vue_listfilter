<template>
    <div>
      <div id="header">
        <div class="app">
          <div class="img">
            <img src="./assets/logo.svg">
          </div>
          <div class="input-searchWrapper">
            <i class="el-icon-search"></i>
            <input class="input-search" type="search" v-model="myInput" placeholder="Explore your own activities">
          </div>
        </div>
      </div>
      <div class="container">
        <div id="sidebar">
          <Location></Location>
        </div>
        <div id="main-content">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Location from '@/components/Location'
import { mapMutations } from 'vuex'

export default {
  components: { Location },
  data () {
    return {
      myInput: ''
    }
  },
  watch: {
    myInput (val) {
      this.SET_SEARCH(val)
    }
  },
  mounted () {
    this.$store.dispatch('getApi')
  },
  methods: {
    ...mapMutations(['SET_SEARCH'])
  }
}
</script>

<style lang="scss">
.app, .container{
  width: 100%;
  margin: 0 auto;
  @include desktop(){
    width: 1000px;
  }
}
.container{
  display: flex;
  @include mobile(){
    flex-wrap: wrap;
  }
}
#header{
  background-color: $purple;
  .app{
    display: flex;
    align-items: center;
    padding: 25px 40px;
    box-sizing: border-box;
  }
  .img{
    width: 30%;
  }
}

#sidebar{
  width: 25%;
  padding: 25px 40px;
  background-color: $grey;
  @include mobile(){
    width: 100%;
  }
}
#main-content{
  width: 75%;
  padding: 25px 40px;
  @include mobile(){
    width: 100%;
  }
}
</style>
