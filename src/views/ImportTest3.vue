<template>
  <div>
    <div>组件二</div>
    <n-button @click="vshowmethod">v-show:点击</n-button>
    <n-button @click="ifshowmothod">v-if:点击</n-button>
    <n-button @click="deleSecondButton">删除myarr中第二个json</n-button>
    <n-button @click="deleFirstButton">删除myarr中第一个json</n-button>
    <!-- <div v-show="ishow">myarr[1].age8 = {{ testData.myarr[1].age8 }}</div> -->
    <div v-if="ifshow" class="content2">{{ testData.myarr[1] }}</div>
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
} from "vue";

const testData = TestData();
let ishow = ref(true);
let ifshow = ref(true);

// let data = ref(testData);
let time1, time2;

function vshowmethod() {
  testData.changeMyarrfirst();
  testData.consoleMyarr();
  ishow.value = !ishow.value;
}
function ifshowmothod() {
  testData.changeMyarrfirst();
  testData.consoleMyarr();
  ifshow.value = !ifshow.value;
}

function deleSecondButton() {
  testData.deleSecondJson();
}

function deleFirstButton() {
  testData.deleFirstJson();
}

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
</script>
    
    <style lang="scss" scoped>
.content2 {
  padding: 10px;
  margin: 10px;
  background-color: rgba(169, 235, 244, 0.381);
}
</style>