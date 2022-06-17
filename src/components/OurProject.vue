<script>
export default {
  name: "OurProject",
  props: ["imgData2"]
 
};
</script>
<template>
  <div class="ourproject">
    <div class="container">
      <h2>Dự Án Của Chúng Tôi</h2>
      <div class="row" v-if="imgData2">
        <div
          class="
            col-12 col-md-12 col-lg-12 col-xl-6
            gap-3
            justify-content-center
            d-flex
          "
          v-for="(item, i) in imgData2"
          :key="i"
          ref="imgData2"
        >
          <div class="ourProjectContainer">
            <img
              class="ourProjectImg"
              style="height: 400px"
              :src="item.srcImg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.ourproject {
  padding-bottom: 100px;
}
.p-img {
  width: 300px;
  height: 355px;
  object-fit: cover;
}
.ourproject h2 {
  padding-top: 100px;
  padding-bottom: 50px;
}
.ourproject img {
  transition: transform 2s, filter 0.5s ease-in-out;
  transform-origin: center center;
  filter: brightness(50%);
  margin-bottom: 30px;
}
.ourproject img:hover {
  filter: brightness(100%);
  transform: scale(1.001);
  cursor: pointer;
}
</style>
