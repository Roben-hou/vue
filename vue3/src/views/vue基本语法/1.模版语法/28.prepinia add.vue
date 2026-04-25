<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia';
let n = ref(1)
const countStore = useCounterStore()
const { sum ,name,age,sumDouble} = storeToRefs(countStore)
function add() {
    //第一种写法
    // countStore.sum += n.value
    //第二种写法
    // countStore.$patch({
    //     sum: 5,
    //     name: 'leo',
    //     age:18,
    // })
    //第三种写法
    countStore.increment(n.value)
}
function minus() {
    sum.value-=n.value
}

</script>

<template>
<div class="counter">
    <h3>当前求和为:{{ sum }},两倍是{{ sumDouble }}</h3>
    <h3>我叫{{ name }},今年{{ age }}岁</h3>
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="add()">+{{ n }}</button>
    <button @click="minus()">-{{ n }}</button>
</div>
</template>

<style scoped>
.counter{
    margin-bottom: 40px;
      background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
select,button{
    height:25px;
    width: 40px;
}
</style>