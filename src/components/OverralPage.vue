<script>
export let n =0
import axios from 'axios'

export default {
    name: 'OverralPage',
    props: ["url"],
    data(){
        return{
            imgData: null,
            imgData2: null,
            imgData3: null,
            otpBtnClicked: false,
        }
    },
    
    async created() {
        
        let one = "https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/gallery"
        let two = "https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/ourproject"
        let three = "https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/personel"

        // GET request using axios with async/await
        const response = await axios.get(one);
        const response2 = await axios.get(two);
        const response3 = await axios.get(three)
        
        this.imgData = response.data;
        this.imgData2 = response2.data;
        this.imgData3 = response3.data;

        
        console.log(this.imgData)
        console.log(this.imgData2)
        console.log(this.imgData3)
    },
    
    methods: {
        
        createFourDives(){
            
            for(let i =n+4;i<n+8;i++){    
                let id = this.imgData[i].id;
                let url = this.imgData[i].srcImg;
                this.createSquare(url,id)
            }
            n+=4;
        },
        createSquare(link,id){
            let getRow = document.getElementsByClassName("row")[3];
            const div = document.createElement("div");
            div.setAttribute("class","col-12 col-md-6 col-lg-3");
            const divImgage = document.createElement("div");
            divImgage.setAttribute("class","img-container");

            const imgage = document.createElement("img");
            imgage.setAttribute("class","col-12 imgsrc");
            imgage.setAttribute("src",link);
            imgage.setAttribute("alt","");

            const pname = document.createElement("p");
            pname.innerHTML = ("Foam "+id);

            const spdate = document.createElement("span");
            spdate.innerHTML = ("Nov 9, 2015");
            

            div.appendChild(divImgage);
            divImgage.appendChild(imgage);
            divImgage.appendChild(pname);
            divImgage.appendChild(spdate);
            
            getRow.append(div);
        }
    },
}
</script>
<template>
  <div class="big">
    <div class="header">
        <div class="row d-flex justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container ">
                    <div class="row hdcontainer">
                        <div class="col-7 col-md-6 col-lg-3">
                            <a class=" navbar-brand" href="#">
                                <img src="../images/t-1593421703-logo.jpg" alt="logo-space">
                            </a>
                        </div>

                        <div class=" col-md-9 position-absolute button-show">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="col-1 col-md-8 collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="hover-horizontal-line navbar-nav me-auto mb-2 mb-lg-0">
                                <div class="row">
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link current" aria-current="page" href="#">HOME</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item" style="margin-right: 0px;margin-left: 0px;">
                                            <a class="nav-link" href="#aboutus">ABOUT US</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#porfolio">PORTFOLIO</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#services">SERVICES</a>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Page
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><a class="dropdown-item" href="https://piepme.com/">Piepme</a></li>
                                                <li><a class="dropdown-item" href="#">Piepmark</a></li>
                                                <li><a class="dropdown-item" href="https://www.webinaris.com/">Webinaris</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                    <div class="col-2">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#contact">CONTACT</a>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <div class="gallery" id="explore">
        <div class="container">
            <h2>Bộ Sưu Tập</h2>
            <div class="row" v-if="imgData">
                <div class="col-12 col-md-6 col-lg-3 " v-for="index in 4" :key="index"  ref="imgData">
                    <div class="img-container"  >
                        <img class="col-12 imgsrc" :src="imgData[index-1].srcImg" alt="">
                        <p>Foam {{index}}</p>
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
    <div class="customer" id="aboutus">
        <div class="container">
            <h2>Đánh Giá Của Khách Hàng </h2>
            <p class="slogan">Written by people like you</p>
            <div class="row d-flex justify-content-center" style="padding-bottom: 90px;">
                <div class="col-12 col-sm-5 d-flex flex-column ">
                    <p class="p-heading">The Summit</p>
                    <div class="d-flex smallcontainer">
                        <div class="straight-line"></div>
                        <span>You only live once. A phrase adopted and since-overused by popular culture, it is actually
                            rooted in truth. You should always be pushing your boundaries, striving for your most
                            difficult goals, and scaring yourself every day with something new.</span>
                    </div>
                    <div class="picture-info">
                        <img class="circle-avatar" src="../images/t-1593499506-img-01.jpg" alt="">
                        <span class="sp-name">Filip Osklen</span>
                    </div>
                </div>
                <div class="col-12 col-sm-2 divider d-flex justify-content-center">
                    <i class="fa-solid fa-rhombus"></i>
                </div>
                <div class="col-12 col-sm-5 d-flex flex-column ">
                    <p class="p-heading">The Summit</p>
                    <div class="d-flex smallcontainer">
                        <div class="straight-line"></div>
                        <span>You only live once. A phrase adopted and since-overused by popular culture, it is actually
                            rooted in truth. You should always be pushing your boundaries, striving for your most
                            difficult goals, and scaring yourself every day with something new.</span>
                    </div>
                    <div class="picture-info">
                        <img class="circle-avatar" src="../images/t-1593499506-img-02.jpg" alt="">
                        <span class="sp-name">Rachel Robert</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ourproject">
        <div class="container">
            <h2>Dự Án Của Chúng Tôi</h2>
            <div class="row"  v-if="imgData2">
                <div class="col-12 col-md-12 col-lg-12 
                col-xl-6 gap-3 justify-content-center d-flex"  v-for="index in 4" :key="index"  ref="imgData2">
                   <div class="ourProjectContainer" >
                       
                       <img class="ourProjectImg" style="height:400px;" :src="imgData2[index-1].srcImg" alt="">
                   </div>
                    
                </div>
            </div>
        </div>
    </div>
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
    <div class="archievement" id="services">
        <div class="container">
            <h2 class="text-center">Thành Tựu</h2>
            <div class="row d-flex ">
                <div class="col-sm-3 d-flex text-center flex-column mabot">
                    <p>12</p>
                    <span>Năm kinh nghiệm</span>
                </div>
                <div class="col-sm-3 d-flex text-center flex-column mabot">
                    <p>525</p>
                    <span>Công trình</span>
                </div>
                <div class="col-sm-3 d-flex text-center flex-column mabot">
                    <p>198</p>
                    <span>Khách hàng</span>
                </div>
                <div class="col-sm-3 d-flex text-center flex-column mabot last">
                    <p>25</p>
                    <span>Nhân Viên</span>
                </div>
            </div>
        </div>
    </div>
    <div class="personel">
        <div class="container">
            <h2>Nhân sự</h2>
            <span class="d-flex text-center">You only live once. A phrase adopted and since-overused by popular culture,
                it is actually rooted in truth. You should always be pushing your boundaries, striving for your most
                difficult goals, and scaring yourself every day with something new. A phrase adopted and since-overused
                by popular culture, it is actually rooted in truth. You should always be pushing your boundaries,
                striving for your most difficult goals, and scaring yourself every day with something new.</span>
            <div class="row" v-if="imgData3">
                <div class="col-md-6 col-lg-3 d-flex flex-column 
                justify-content-center text-center" v-for="index in 16" :key="index"  ref="imgData3">
                    <div class="bibictn"  >
                        <img class="p-img" :src="imgData3[index-1].srcImg" alt="">
                        <p class="p-name"></p>
                        <p class="p-work-position"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-lg-3">
                    <div class="mgbot30">
                        <p>New Space Interiors</p>
                        <span>Số 164A Điện Biên Phủ, Phường 6, Quận 3.
                            Tp.Hồ Chí Minh, Việt Nam</span>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <p>Thông tin chung</p>
                    <span>Contact@newspace.vn
                        Lienhe@khonggianmoi.info</span>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="mgbot30">
                        <div class="row d-flex flex-column">
                            <div class="col-md-12">
                                <div class="contact-icon">
                                    <ul class="row d-flex flex-row">
                                        <li class="col-3"><a href="http://fb.com"><i
                                                    class="fa-brands fa-facebook-f d-flex justify-content-center align-items-center"></i></a>
                                        </li>
                                        <li class="col-3"><a href="http://instagram.com"><i
                                                    class="fa-brands fa-instagram d-flex justify-content-center align-items-center"></i></a>
                                        </li>
                                        <li class="col-3"><a href="http://youtube.com"><i
                                                    class="fa-brands fa-youtube-square d-flex justify-content-center align-items-center"></i></a>
                                        </li>
                                        <li class="col-3"><a href="http://twitter.com"><i
                                                    class="fa-brands fa-twitter d-flex justify-content-center align-items-center"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-12 d-flex justify-content-center">
                                <span>(028) 3820 1558 - 0908 130 140</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 d-flex justify-content-center">
                    <img src="../images/t-1593500297-img-01.png" alt="">
                </div>
            </div>
        </div>
    </div>
  </div>
    
 
  
</template>

<style>
html, body{
    width: 100%;
    font-family: OpenSans;
    font-size: 14px;
    color: black;
    overflow-x: hidden;
    position: relative;
}
h2{
    font-size: 42px;
}
img{
    object-fit: fill;
}

.header a{
    text-transform: uppercase;
}
.navbar a{
    text-decoration: none;
    color: black;
}
.navbar-brand img{
    width: 60px;
}
.button-show button{
    float: right;
    margin-top: 15px;
    margin-right: 30px;
}
.col-lg-3 {
    margin: 10px 0;
}   
.hor-line{
    width: 100%;
    height: 2px;
    color: black;
    border: 1px black solid;
}
.hdcontainer{
    width: 100%;
}
.navbar-toggler button{
    float: right;
}
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
/* 
<div class="col-sm-2 d-flex justify-content-center"></div>
<div class=" nav-container d-flex justify-content-center">
*/
.customer{
    background: url('../images/t-1593425781-bg.jpg') ;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
}
.fa-rhombus{
    width: 100px;
    height: 100px;
    display: block;
}
.straight-line{
    width: 2px;
    height: 70px;
    margin: 0 20px 68px 0;
    background-color: #b9b9b9;
}
.p-heading{
    margin-left: 20px;
    font-size: 20px;
}
.customer h2{
    padding-top: 290px; text-align: center; margin-bottom: 8px;
}
.customer span{
    font-size: 16px;
    color: #d6d6d6;
}
.smallcontainer{
    height: auto;
    margin-bottom: 28px;
}
.sp-name{
    margin-left: 8px;
}
.slogan{
    text-align: center;
    padding-bottom: 121px;
}
.circle-avatar img{    
    width: 100%;
    height: auto;
}
.circle-avatar{
    position: relative;
    overflow: hidden;
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
}

.ourproject{
    padding-bottom: 100px;
}
.p-img{
    width: 300px;
    height: 355px;
    object-fit: cover;
}
.ourproject h2{
    padding-top: 100px;
    padding-bottom: 50px;
}
.ourproject img{
    transition: transform 2s, filter .5s ease-in-out;
    transform-origin: center center;
    filter: brightness(50%);
    margin-bottom: 30px;
}
.ourproject img:hover {
    filter: brightness(100%);
    transform: scale(1.001);
    cursor: pointer;
}
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
.archievement{
    background: url('../images/t-1593499052-bg.jpg');  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.archievement h2{
    padding-top: 77px;
    padding-bottom: 70px;
    color: white;   
}
.archievement .row{
    padding-bottom: 100px;
    color: white;
}
.archievement p{
    font-size: 50px;
    margin-bottom: 0;
}
.archievement span{
    font-size: 16px;
    text-transform: lowercase;
}
.mabot{
    margin-bottom: 30px;
    border-right: 1px white solid;
}
.last{
    border-right:none;
}
.personel{
    height: auto;
    padding-bottom: 200px;
}
.personel h2{
    margin: 87px 0 24px 0;
    text-align: center;
    font-weight: 600;
}
.personel span{
    font-size: 18px;
    text-align: center;
}
.personel .row{
    margin-top: 45px;
}
.p-name{
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
}
.p-work-position{
    font-size: 16px;
    font-family: OpenSans;
}
.footer{
    padding-top: 60px;
    padding-bottom: 60px;
    background-image: url(../images/t-1593499052-bg.jpg);
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.footer img{
    height: 96px;
    width: auto;
}
.footer p{
    margin-bottom: 18px;
    font-size: 25px;
    font-weight: 600;
}
.footer li{
    list-style: none;
}
.footer a{
    color: white;
    text-decoration: none;
}
.footer i{
    width: 30px;
    height: 30px;
    border: 1px solid white;
    border-radius: 50%;
}
.footer span{
    font-size: 16px;
}
.contact-icon{
    margin-top: 35px;
}
.mgbot30{
    margin-bottom: 30px;
}
/* Custom hover menu */

.hover-horizontal-line {
  font-family: 'Raleway', Arial, sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
}
.hover-horizontal-line * {
  box-sizing: border-box;
}
.hover-horizontal-line li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.5em;
  padding: 0;
}
.hover-horizontal-line a {
  padding: 0.5em 0;
  color: #000;
  position: relative;
  letter-spacing: 1px;
  text-decoration: none;
}
.hover-horizontal-line a:before,
.hover-horizontal-line a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.hover-horizontal-line a:before {
  bottom: 0;
  display: block;
  height: 1px;
  width: 0%;
  content: "";
  background-color: black;
}
.hover-horizontal-line a:after {
  left: 0;
  top: 0;
  padding: 0.5em 0;
  position: absolute;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
  max-width: 0%;
  overflow: hidden;
}
.hover-horizontal-line a:hover:before,
.hover-horizontal-line .current a:before {
  opacity: 1;
  width: 80%;
}
.hover-horizontal-line a:hover:after,
.hover-horizontal-line .current a:after {
  max-width: 90%;
}



</style>




