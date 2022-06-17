<script>
export let n = 0;
// import axios from "axios";
export default {
  name: "DetailProject",
  props: ["imgData2"],
};
</script>
<template>
  <div class="detailproject" id="porfolio">
    <div class="container">
      <h2>Dự Án Chi Tiết</h2>
      <div class="row">
        <div class="col-md-4">
          <p>
            You only live once. A phrase adopted and since-overused by popularculture, it is actually rooted in truth. You should always be pushing your boundaries, 
            striving for your most difficult goals, and scaring yourself every day with something new.<br /><br />A phrase adopted and since-overused by popular 
            culture, it is actually rooted in truth. You should always be pushing your boundaries, striving for your most difficult goals, and scaring
            yourself every day with something new. <br /><br /> Since-overused by popular culture, it is actually rooted in truth. You should always be pushing
            your boundaries, striving for your mostdifficult goals, and scaring yourself every day with something new.<br /><br />You should always be pushing your 
            boundaries <br /><br /> scaring yourself every day with something new, since-overused by popular culture <br /><br /> scaring yourself every day with 
            something new, since-overused by popular culture <br /><br /> scaring yourself every day with something new, since-overused by popular culture
          </p>
        </div>
        <div class="col-md-8">
          <div class="row d-flex justify-content-center" v-if="imgData2">
            <div
              class="col-md-12 col-lg-6"
              v-for="(item, i) in imgData2"
              :key="i"
              ref="imgData2"
            >
              <div class="pict">
                <img :src="item.srcImg" alt="" class="detailProjectImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.detailproject {
  padding-bottom: 100px;
}
.detailproject h2 {
  padding-top: 100px;
  padding-bottom: 50px;
}
.detailproject img {
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  object-fit: cover;
}
.detailproject p {
  font-size: 18px;
  margin-bottom: 20px;
}
</style>
