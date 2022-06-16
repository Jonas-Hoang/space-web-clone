<template>
    <div class="detailproject" id="porfolio">
        <div class="container">
            <h2>Dự Án Chi Tiết</h2>
            <div class="row">
                <div class="col-md-4">
                    <p>You only live once. A phrase adopted and since-overused by popular culture, it is actually rooted
                        in truth. You should always be pushing your boundaries, striving for your most difficult goals,
                        and scaring yourself every day with something new.</p>
                    <p>A phrase adopted and since-overused by popular culture, it is actually rooted in truth. You
                        should always be pushing your boundaries, striving for your most difficult goals, and scaring
                        yourself every day with something new.</p>
                    <p>Since-overused by popular culture, it is actually rooted in truth. You should always be pushing
                        your boundaries, striving for your most difficult goals, and scaring yourself every day with
                        something new.</p>
                    <p>You should always be pushing your boundaries</p>
                    <p>scaring yourself every day with something new, since-overused by popular culture</p>
                    <p>scaring yourself every day with something new, since-overused by popular culture</p>
                    <p>scaring yourself every day with something new, since-overused by popular culture</p>
                </div>
                <div class="col-md-8">
                    <div class="row d-flex justify-content-center" v-if="imgData2">
                        <div class="col-md-12 col-lg-6 "  v-for="index in 6" :key="index" ref="imgData2">
                             <div class="pict" >
                                <img :src="imgData2[index-1].srcImg" alt="" class="detailProjectImg">
                                </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>


.detailproject{
    padding-bottom: 100px;
}
.detailproject h2{
    padding-top: 100px;
    padding-bottom: 50px;
}
.detailproject img{
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    object-fit: cover;
}
.detailproject p{
    font-size: 18px;
    margin-bottom: 20px;
}
</style>
<script>
export let n = 0
import axios from 'axios'
export default {
    name: 'DetailProject',
    data(){
        return{
            imgData2: null,
        }
    },
    
    async created() {
        // GET request using axios with async/await
        
        const response2 = await axios.get("https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/ourproject");
        this.imgData2 = response2.data;
        
    },
}
</script>