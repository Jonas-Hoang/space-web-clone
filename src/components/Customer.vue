<template>
  <div class="customer" id="aboutus">
    <div class="container">
      <h2>Đánh Giá Của Khách Hàng</h2>
      <p class="slogan">Written by people like you</p>
      <div
        class="row d-flex justify-content-center"
        style="padding-bottom: 90px"
      >
        <div class="col-12 col-sm-5 d-flex flex-column">
          <p class="p-heading">The Summit</p>
          <div class="d-flex smallcontainer">
            <div class="straight-line"></div>
            <span
              >You only live once. A phrase adopted and since-overused by
              popular culture, it is actually rooted in truth. You should always
              be pushing your boundaries, striving for your most difficult
              goals, and scaring yourself every day with something new.</span
            >
          </div>
          <div class="picture-info">
            <img
              class="circle-avatar"
              src="../images/t-1593499506-img-01.jpg"
              alt=""
            />
            <span class="sp-name">Filip Osklen</span>
          </div>
        </div>
        <div class="col-12 col-sm-2 divider d-flex justify-content-center">
          <i class="fa-solid fa-rhombus"></i>
        </div>
        <div class="col-12 col-sm-5 d-flex flex-column">
          <p class="p-heading">The Summit</p>
          <div class="d-flex smallcontainer">
            <div class="straight-line"></div>
            <span
              >You only live once. A phrase adopted and since-overused by
              popular culture, it is actually rooted in truth. You should always
              be pushing your boundaries, striving for your most difficult
              goals, and scaring yourself every day with something new.</span
            >
          </div>
          <div class="picture-info">
            <img
              class="circle-avatar"
              src="../images/t-1593499506-img-02.jpg"
              alt=""
            />
            <span class="sp-name">Rachel Robert</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style >
.btn-explore-gallery a {
  text-decoration: none;
  color: black;
}
.img-container:hover {
  transform: scale(
    1.1
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  cursor: pointer;
}
/* 
<div class="col-sm-2 d-flex justify-content-center"></div>
<div class=" nav-container d-flex justify-content-center">
*/
.customer {
  background: url("../images/t-1593425781-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.fa-rhombus {
  width: 100px;
  height: 100px;
  display: block;
}
.straight-line {
  width: 2px;
  height: 70px;
  margin: 0 20px 68px 0;
  background-color: #b9b9b9;
}
.p-heading {
  margin-left: 20px;
  font-size: 20px;
}
.customer h2 {
  padding-top: 290px;
  text-align: center;
  margin-bottom: 8px;
}
.customer span {
  font-size: 16px;
  color: #d6d6d6;
}
.smallcontainer {
  height: auto;
  margin-bottom: 28px;
}
.sp-name {
  margin-left: 8px;
}
.slogan {
  text-align: center;
  padding-bottom: 121px;
}
.circle-avatar img {
  width: 100%;
  height: auto;
}
.circle-avatar {
  position: relative;
  overflow: hidden;
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
}
</style>
<script>
export default {
  name: "Customer",
};
</script>
