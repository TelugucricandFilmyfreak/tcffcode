<template>
    <div class="container mt-4">
        <div class="bg-white shadow-lg pl-4">
            <div class="text-center">
                <h4 class="center-text">RECENT-POSTS</h4>
                <hr class="bg-black" id="line">
            </div>
            <div class="row">
                <div class="col-md-4">
                    <img :src="images.hopeisland" alt="" class="img-fluid">
                </div>
                <div class="col-md-4">
                    <img :src="images.mbchildop" alt=""  class="img-fluid">
                </div>
                <div class="col-md-4">
                    <img :src="images.alvpposter" alt=""  class="img-fluid">
                </div>
            </div><br/>
            <div class="row">
                <div class="col-md-4">
                    <img :src="images.sln" alt=""  class="img-fluid">
                </div>
            </div><br/>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                images:{
                    hopeisland:require('@/assets/pageimages/hopeisland.jpg'),
                    alvpposter:require('@/assets/pageimages/alvpposter.jpg'),
                    sln:require('@/assets/pageimages/sln.jpg'),
                    mbchildop:require('@/assets/pageimages/mbchildop.jpg')
                }
        }
    }
}
</script>
<style scoped>
img{
    height: 300px!important;
    width:300px!important;
}
img:hover{
    opacity: 0.6;
    color: black!important;
}
.center-text{
    font-family: 'Oswald', sans-serif;
}
#line{
    background-color:#282869;
    height:2px;
}
</style>