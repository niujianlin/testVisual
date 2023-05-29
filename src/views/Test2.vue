<template>
  <div class="container">
    <div class="content1">{{ testData.myarr[0] }}</div>
    <n-divider />

    <ImportTest3></ImportTest3>
  </div>
</template>
    
    <script setup>
import {
  ref,
  reactive,
  inject,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
} from "vue";

import { useRouter, useRoute } from "vue-router";
import ImportTest3 from "./ImportTest3.vue";
import { TestData } from "../stores/TestData";

const testData = TestData();

const router = useRouter();
const route = useRoute();

const message = inject("message");
const axios = inject("axios");

// 定时造数据，改数据
function timer() {
  //   testData.mutiMyArrfist();
  setInterval(() => {
    testData.changeMyarrfirst();
    console.log("在改第一个josn。时间间隔（毫秒）:", 2000);
  }, 2000);
  setInterval(() => {
    if (testData.myarr.length > 1) {
      // 没有第二个json串了（被删除了）
      testData.changeMyarrSecond();
    }

    console.log("在改第二个josn。时间间隔（毫秒）:", 1000);
  }, 1000);
}

// // 启动定时器
timer();

let time1, time2;
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
    "组件一渲染时间(毫秒)：",
    time2.getMilliseconds() - time1.getMilliseconds()
  );
});

onBeforeUnmount(() => {
  clearInterval(this.timer);
});
</script>
    
    <style scoped>
.content1 {
  padding: 10px;
  margin: 10px;
  background-color: rgba(169, 194, 244, 0.381);
}
</style>
    