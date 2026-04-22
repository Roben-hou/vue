<template>
<div class="person">
<h3>当前求和为:{{ sum }}</h3>
<h3>大sum为:{{ bigSum }}</h3>
<button @click="sumAdd">click</button>
<hr>
<img class="img" v-for="(dog,index) in dogList" :src="dog" :key="index"><br>
<button @click="getDog">getdog</button>
</div>
</template>

<script setup lang="ts">
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'
let { sum, sumAdd,bigSum } = useSum()
let { dogList, getDog } = useDog()
</script>

<style>
.person {
  background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
.img{
    height: 200px;
    margin: 20px;
}
</style>