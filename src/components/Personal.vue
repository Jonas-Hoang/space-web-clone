<template>
  <div class="personel">
    <div class="container">
      <h2>Nhân sự</h2>
      <span class="d-flex text-center"
        >You only live once. A phrase adopted and since-overused by popular
        culture, it is actually rooted in truth. You should always be pushing
        your boundaries, striving for your most difficult goals, and scaring
        yourself every day with something new. A phrase adopted and
        since-overused by popular culture, it is actually rooted in truth. You
        should always be pushing your boundaries, striving for your most
        difficult goals, and scaring yourself every day with something
        new.</span
      >
      <div class="row" v-if="imgData3">
        <div
          class="
            col-md-6 col-lg-3
            d-flex
            flex-column
            justify-content-center
            text-center
          "
          v-for="(item, i) in imgData3"
          :key="i"
        >
          <div class="bibictn">
            <img class="p-img" :src="item.srcImg" alt="" />
            <p class="p-name"></p>
            <p class="p-work-position"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.mabot {
  margin-bottom: 30px;
  border-right: 1px white solid;
}
.last {
  border-right: none;
}
.personel {
  height: auto;
  padding-bottom: 200px;
}
.personel h2 {
  margin: 87px 0 24px 0;
  text-align: center;
  font-weight: 600;
}
.personel span {
  font-size: 18px;
  text-align: center;
}
.personel .row {
  margin-top: 45px;
}
.p-name {
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
}
.p-work-position {
  font-size: 16px;
  font-family: OpenSans;
}
</style>
<script>
import axios from "axios";
export default {
  name: "Personal",
  data() {
    return {
      imgData3: null,
    };
  },

  async created() {
    // GET request using axios with async/await

    const response = await axios.get(
      "https://629038e827f4ba1c65b598c7.mockapi.io/api/v1/personel"
    );
    this.imgData3 = response.data;
  },
};
</script>