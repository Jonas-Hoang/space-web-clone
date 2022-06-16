<template>
     <div class="gallery" id="explore">
        <div class="container">
            <h2>Bộ Sưu Tập</h2>
            <div class="row" v-if="imgData">
                <div class="col-12 col-md-6 col-lg-3 " id="img-gallery" v-for="item,i in imgData" :key="i"  ref="fetData1">
                    <div class="img-container"  >
                        <img class="col-12 imgsrc" :src="item.srcImg" alt="">
                        <p>Foam {{i+1}}</p>
                        <span>Nov 9, 2015</span>    
                    </div>
                </div>
                
            </div>
            <div class="btn-explore-gallery text-end pt-4">
                <a id="loadMore" @click="createFourDives()" style="cursor: pointer;" >
                    <button style="margin-bottom: 30px; border:none;">Explore gallery <i
                            class="fa-solid fa-arrow-right"></i></button>
                </a>
            </div>
        </div>
    </div>
</template>


<style>
.gallery{
    background-color: #f1f1f1;
}
.gallery h2{
    padding-top: 56px;
    padding: 56px 0 44px 0;
}
.gallery img{
    width: 100%;
    height: 100%;
    object-fit: fill;
}
.gallery p{
    padding-top: 10px;
    margin-bottom: 0;
}
.gallery span{
    font-size: 12px;
}
.gallery .img-container{
   padding: 10px;
    background-color: white;
    transition: transform .5s ease;
}
.btn-explore-gallery a{
    text-decoration: none;
    color: black;
}
.img-container:hover {
    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    cursor: pointer;

  }
</style>

<script>
export let n = 0
import axios from 'axios'
export default {
    name: 'Gallery',
    data(){
        return{
            imgData: null,
            fetData1: [],
            otpBtnClicked: false,
        }
    },
    
    async created() {
        
        let x =  await this.createFofo()
        this.imgData = x.data
    },
    
    methods: {
        createFofo(){
            let one = "https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/gallery"
            // GET request using axios with async/await
            const response = axios.get(one);
            // this.imgData = response.data;
            console.log(response)
            return response
        },
        createFourDives(){
            console.log("aaaa")
        },
        
    },
}
</script>