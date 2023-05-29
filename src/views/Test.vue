<template>
  <div class="title"><div>Test.vue</div></div>
  <n-button @click="toPage1">测试组件1</n-button>
  <n-button @click="toPage2">测试组件2</n-button>
  <n-divider />

  <n-button @click="deleteFirstButton">删掉组件一中的第三个json属性</n-button>
  <n-button @click="addFirstButton">添加组件一中的第三个json属性</n-button>
  <n-button @click="editFirstButton">修改组件一中的第三个json属性</n-button>
  <n-button @click="deletFirstJsonButton">删除第一个json</n-button>
  <n-divider />

  <n-button @click="deleteSecondButton">删掉组件二中的第三个json属性</n-button>
  <n-button @click="addSecondButton">添加组件二中的第三个json属性</n-button>
  <n-button @click="editSecondButton">修改组件二中的第三个json属性</n-button>
  <n-button>删除第二个json</n-button>

  <n-divider />
  <div class="view">
    <router-view></router-view>
  </div>
</template>
  
  <script setup>
import { ref, reactive, inject, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { TestData } from "../stores/TestData";

const testData = TestData();
const router = useRouter();
const route = useRoute();

const message = inject("message");
const axios = inject("axios");

// // 定时造数据，改数据
function timer() {
  try {
    // testData.mutiMyArrfist();
    setInterval(() => {
      testData.changeMyarrfirst();
      console.log("time:", 2000);
    }, 2000);
    setInterval(() => {
      if (testData.myarr.length > 1) {
        testData.changeMyarrSecond();
        console.log("time:", 1000);
      }
    }, 1000);
  } catch (e) {
    console.log("错误：", e);
  }
}

// // 启动定时器
timer();

// ---------------------------

// 第一个JSON中的按钮方法（删除某个属性）
function deleteFirstButton() {
  testData.deleteFirst();
}

// 第二个JSON中的按钮方法（删除某个属性）
function deleteSecondButton() {
  testData.deleteSecond();
}

// ----------------------------

// 第一个按钮方法（添加某个属性）
function addFirstButton() {
  testData.addFirst();
}
// 第二个按钮方法（添加某个属性）
function addSecondButton() {
  testData.addSecond();
}

// ---------------------

// 第一个按钮方法（修改某个属性）
function editFirstButton() {
  testData.editFirst();
}

// 第二个按钮方法（修改某个属性）
function editSecondButton() {
  testData.editSecond();
}

// ------------------------------------
function deletFirstJsonButton() {
  testData.deleFirstJson();
}

//路由跳转
const toPage1 = () => {
  router.push("/test/test1");
};
const toPage2 = () => {
  router.push("/test/test2");
};

onBeforeUnmount(() => {
  clearInterval(this.timer);
});
</script>
  
  <style scoped>
.title {
  color: rgb(184, 184, 75);
  font-size: large;
  justify-content: center;
}
</style>
  