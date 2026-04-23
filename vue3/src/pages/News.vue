<template>
<div class="news">
<h2>news</h2>
<!-- 导航区 -->
<ul>
  <li v-for="n in news" :key="n.id">
   <RouterLink to="/news/detail">{{n.tittles}}</RouterLink> </li>
</ul>
<!-- 展示区 -->
<RouterView></RouterView>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink,RouterView } from "vue-router";
const news = ref([
  {id:1,tittles:"news1",content:"aaaaa"},
  {id:2,tittles:"news2",content:"bbbbb"},
  {id:3,tittles:"news3",content:"ccccc"}
])
</script>

<style scoped>
.news{
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
}
</style>