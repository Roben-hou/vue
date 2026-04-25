<template>
<div class="news">
<h2>news</h2>
<!-- 导航区 -->
<ul>
  <li v-for="n in news" :key="n.id">
    <button @click="jump(n)">clickjump</button>
    <!-- 第一种写法 -->
    <!-- <RouterLink :to="`/news/detail/${n.id}/${n.tittles}/${n.content}`">{{n.tittles}}</RouterLink>  -->
    <!-- 第二种写法 -->
   <RouterLink
    :to="{
      name:'detail',  
      params:{
        id:n.id,
        tittles:n.tittles,
        content:n.content
      }
    }">
    {{ n.tittles }}</RouterLink>
     </li>
</ul>
<!-- 展示区 -->
<div class="content">
<RouterView></RouterView>
</div>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";
const router=useRouter()
const news = ref([
  {id:1,tittles:"news1",content:"aaaaa"},
  {id:2,tittles:"news2",content:"bbbbb"},
  {id:3,tittles:"news3",content:"ccccc"}
])
interface news{
   id:number, 
   tittles:string, 
   content:string 
}
function jump(n: news) {  
  router.push(
      { 
      name:'detail',  
      params:{
        id:n.id,
        tittles:n.tittles,
        content:n.content
      }
    }
  )
}
</script>

<style scoped>
.news{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
.content{
  flex: 1;
  height: 100px;
    border-radius: 10px;
    margin-left: 30px;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid black;
    background-color: rgb(234, 230, 230);
}
</style>