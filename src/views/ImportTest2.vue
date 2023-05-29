<template>
  <div>
    <span>组件二</span>
    <!-- <div class="content">
      myarr[testData.myarr.length - 1].age8 =
      {{ testData.myarr[testData.myarr.length - 1].age8 }}
    </div> -->
    <div class="content">
      myarr[1].age8 =
      {{ testData.myarr[1].age8 }}
    </div>
  </div>
</template>
  
  <script setup>
import { TestData } from "../stores/TestData";
import {
  ref,
  reactive,
  inject,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
} from "vue";

const testData = TestData();
let time1, time2;

onMounted(() => {
  console.log("myarr = ", testData.myarr);
});

onBeforeUpdate(() => {
  time1 = new Date();
});

onUpdated(() => {
  let date = new Date();
  time2 = new Date();
  console.log(
    "datatime2:",
    Date.now(),
    "精确时间：",
    date.getSeconds(),
    "组件二渲染时间(毫秒)：",
    time2.getMilliseconds() - time1.getMilliseconds()
  );
});

onUnmounted(() => {
  console.log("组件二被销毁");
});
</script>
  
  <style lang="scss" scoped>
.content {
  padding: 10px;
  margin: 10px;
  background-color: rgba(169, 194, 244, 0.381);
}
// .content-detail {
//   border-radius: 5px;
// }
</style>