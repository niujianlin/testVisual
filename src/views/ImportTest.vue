<template>
  <div>
    <span>组件一</span>
    <div class="content">
      <span>绑定的pinia中的testData.myarr[0].age3 = </span>
      {{ testData.myarr[0].age3 }}
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

onBeforeUpdate(() => {
  time1 = new Date();
});

onUpdated(() => {
  let date = new Date();
  time2 = new Date();
  console.log(
    "datatime1:",
    Date.now(),
    "精确时间(秒)：",
    date.getSeconds(),
    // date.getMilliseconds(),
    "组件一渲染时间(毫秒)：",
    time2.getMilliseconds() - time1.getMilliseconds()
  );
});

onUnmounted(() => {
  console.log("组件一被销毁");
});
</script>

<style lang="scss" scoped>
.content {
  padding: 10px;
  margin: 10px;
  background-color: azure;
}
// .content-detail {
//   border-radius: 5px;
// }
</style>