<template>
    <div>
      <div id="header">
        <div class="app"><img src="./assets/logo.svg"></div>
      </div>
      <div class="container">
        <div id="sidebar">ssssss</div>
        <div id="main-content">
          <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import '@/styles/element-variables.scss';
@import '@/styles/application.scss';
.app{
  width: 1200px;
  margin: 0 auto;
}
#header{
  background-color: $purple;
  padding: 25px 0;
}
.container{
  display: flex;
  width: 1200px;
  margin: 0 auto;
}
#sidebar{
  width: 35%;
}
#main-content{
  width: 65%;
}
</style>
