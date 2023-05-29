<template>
  <router-view></router-view>
</template>

<script setup>
// 计时
// import { TestData } from "../stores/TestData";
import { ref, reactive, inject, onMounted, onUpdated } from "vue";

onUpdated(() => {
  console.log("datatimeAPP---:", Date.now());
});
</script>

<style scoped>
</style>
