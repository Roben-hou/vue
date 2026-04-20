<script setup lang="ts">
import { ref, watchEffect } from 'vue';

let temp = ref(10)
let height = ref(0)

function changeTemp() {
    temp.value+=10
}
function changeHeight() {
    height.value+=10
}
// watchEffect 相比于 watch 的区别：
// 1. 立即执行：在声明时就会立即运行一次回调。
// 2. 自动追踪：不需要手动指定监听的源，会自动收集函数内用到的所有响应式属性。
// 3. 参数区别：watchEffect 的回调参数是一个清理函数注册器 (onCleanup)，而不是数据的值。
//    【注意】：如果写成 watchEffect((value) => { ... })，这里的 value 是函数体，不是监听的数值。
//    如果需要获取最新的值，直接在函数体内访问对应的 .value 即可。
watchEffect(()=>{
    if (temp.value >= 50 || height.value >= 70) {
        console.log('温度过高', temp.value, height.value)
    }
})
</script>

<template>
    <div class="person">
        <h3>温度：{{ temp }}</h3>
        <h3>海拔：{{ height }}</h3>
        <button @click="changeTemp">Temp+10</button>
        <button @click="changeHeight">height+10</button>
    </div>
</template>

<style>
.person {
  background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
button{
    margin: 0 5px;
}
</style>

