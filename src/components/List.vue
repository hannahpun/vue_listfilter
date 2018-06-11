<template>
    <div class="list">
        <div class="list-img" style="background-image:url(https://amp.businessinsider.com/images/5944425a9a7af52c008b4fdb-750-563.jpg)">
        </div>
       <div class="list-content">
            <h2>Kogi Cosby sweater.</h2>
            <p class="list-txt">Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.</p>
            <div class="list-tag">
                <p class="bold">Ethan Foster</p>
                <p class="tag-category">Entertainment</p>
            </div>
            <div class="list-note">
                <p><i class="el-icon-location"></i>Kaohsiung City</p>
                <p><i class="el-icon-date"></i>Kaohsiung City</p>
                <p></p>
            </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Lists',
  data () {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list{
    display: flex;
    align-items: stretch;
    background-color: $white;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
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
    margin-left: 20px;
    color: $white;
    background-color: $grey-m;
    border-radius: 100px;
    padding: 5px 15px;
}
</style>
