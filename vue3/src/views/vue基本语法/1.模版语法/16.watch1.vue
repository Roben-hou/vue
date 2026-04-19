<script setup lang="ts">
import { ref, watch } from 'vue';

let sum=ref(0)  
function changeSum(){
    sum.value+=1
}
//watch只能监听ref,reactive定义的数据，一个函数返回的值，包含上述内容的数组
// watch(sum,(oldvalue, newvalue)=> {
//     console.log('sumchange',oldvalue,newvalue)
// })
const stop=watch(sum,(oldvalue, newvalue)=> {
    console.log('sumchange', oldvalue, newvalue)
    if(newvalue===10){
        stop()
    }
})
</script>


<template>
    <h2>情况1:监听ref定义的基本类型数据</h2>
<button @click="changeSum">sum{{ sum }}</button>
</template>

<style>
.person {
  background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
</style>

