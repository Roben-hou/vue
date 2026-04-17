<script setup lang="ts">
import { reactive } from 'vue';

let car = reactive({ brand: 'bench', price: 100 })
let games = reactive([
    { id: 1, name: 'wzry' },
    { id: 2, name: 'lol' },
    { id: 3, name: 'dota' }
])
function changeCarprice(){
    car.price +=10
}
function changegame(){
    games[0].name='yuanshen'
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