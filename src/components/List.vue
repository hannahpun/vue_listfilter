<template>
    <div class="list">
        <div class="list-img" style="background-image:url(https://amp.businessinsider.com/images/5944425a9a7af52c008b4fdb-750-563.jpg)">
        </div>
       <div class="list-content">
           <pre>{{contents}}</pre>
            <h2>{{contents.Name}}</h2>
            <p class="list-txt">{{contents.Description}}</p>
            <div class="list-tag">
                <p class="bold">Ethan Foster</p>
                <p class="tag-category">Entertainment</p>
            </div>
            <div class="list-note">
                <p><i class="el-icon-location"></i>{{contents.Zone}}</p>
                <p><i class="el-icon-date"></i>{{contents.Opentime}}</p>
                <p></p>
            </div>
       </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  props: ['contents']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
    display: flex;
    align-items: stretch;
    background-color: $white;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
    margin-bottom: 25px;
}
.list-img{
    background-size: cover;
    width: 220px;
    flex-shrink: 0;
    img{
        width: 100%;
    }
}
.list-content{
    padding: 20px;
    h2{
        color: $purple;
    }
    .list-txt{
        margin: 15px 0;
        overflow: hidden;
        line-height: 1.6;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
}
.list-tag{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
.list-note{
    display: flex;
    align-items: center;
    i{
        padding-right: 5px;
    }
    p{
        margin-right: 20px;
        color: $grey-l;
    }
}
.tag-category{
     margin-left: 10px;
}
</style>
