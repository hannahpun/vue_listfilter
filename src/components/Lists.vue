<template>
    <div>
       <List></List>
    </div>
</template>

<script>
import List from '@/components/List'
export default {
  name: 'Lists',
  data () {
    return {
      show: true
    }
  },
  components: { List }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// @import '@/styles/_variables.scss';
h1{
    color: $purple-dark;
}
.grid-content{
    background-color: #ddd;
}
</style>
