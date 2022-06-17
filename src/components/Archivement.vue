<template>
  <div class="archievement" id="services">
    <div class="container">
      <h2 class="text-center">Thành Tựu</h2>
      <div class="row d-flex">
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
</template>
<style >
.archievement {
  background: url("../images/t-1593499052-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.archievement h2 {
  padding-top: 77px;
  padding-bottom: 70px;
  color: white;
}
.archievement .row {
  padding-bottom: 100px;
  color: white;
}
.archievement p {
  font-size: 50px;
  margin-bottom: 0;
}
.archievement span {
  font-size: 16px;
  text-transform: lowercase;
}
</style>
<script>
export default {
  name: "Archivement",
};
</script>
