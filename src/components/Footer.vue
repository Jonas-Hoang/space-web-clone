<template>
    
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
</template>
<style >

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
</style>
<script>


export default{
    name: 'Footer',
}
</script>
