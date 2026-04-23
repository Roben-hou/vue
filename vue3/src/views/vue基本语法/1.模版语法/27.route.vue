<template>
<div class="app">
<h2 class="title">Vue路由测试</h2>
<!-- 导航区 -->
 <div  class="navigate">
    <RouterLink to="/home" active-class="active">首页</RouterLink>
    <RouterLink to="/news" active-class="active">新闻</RouterLink>
    <RouterLink to="/about" active-class="active">关于</RouterLink>
    <!-- to的另外两种写法 -->
    <!-- <RouterLink :to="{path:'about'}" active-class="active">关于</RouterLink>
    <RouterLink :to="{name:'about'}" active-class="active">关于</RouterLink> -->
 </div>
 <!-- 展示区 -->
 <div class="content">
<RouterView></RouterView>
 </div>
</div>
</template>

<script setup lang="ts">
import { RouterLink,RouterView} from 'vue-router';
</script>

<style>
.title{
  text-align: center;
  word-spacing: 5px;
  margin: 30px 0;
  height: 70px;
  line-height: 70px;
  background-image: linear-gradient(45deg,gray,white);
  border-radius: 10px;
  box-shadow: 0 0 2px;
  font-size: 30px;
}
.navigate a{
  display: inline-block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color:white;
  font-size: 15px;
  margin: 0 10px
}
.navigate a:hover {
  background-color: rgb(72, 72, 72);
  color:white;
}
.navigate a.active{
    background-color: rgb(67, 65, 65);
    color:white;
    font-weight: bold;
    text-shadow: 0 0 1px black;
}
.content{
    height: 300px;
    border-radius: 10px;
    margin-top: 10px;
    padding: 20px;
    border: 1px solid black;
    background-color: rgb(234, 230, 230);
}
</style>