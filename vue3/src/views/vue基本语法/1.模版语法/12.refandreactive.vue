<script setup lang="ts">
import { ref } from 'vue';

let car = ref({ brand: 'bench', price: 100 })
let games = ref([
    { id: 1, name: 'wzry' },
    { id: 2, name: 'lol' },
    { id: 3, name: 'dota' }
])
function changeCarprice(){
    car.value = { brand: 'bmw', price: 200 }
    //reactive对象不能直接替换，需要用Object.assign
    //Object.assign(car.value, { brand: 'bmw', price: 200 })
}
function changegame(){
    games.value[0].name='yuanshen'
}
</script>

<template>
<div class="person">
    <h2>修改汽车价格:{{ car.brand }}车,{{ car.price }}万</h2>
    <button @click="changeCarprice">changeCarprice</button>
</div>
<ul>
    <li v-for="item in games" :key="item.id">{{ item.name }}</li>
</ul>
<button @click="changegame">changegame</button>
</template>

<style>
.person {
  background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
</style>