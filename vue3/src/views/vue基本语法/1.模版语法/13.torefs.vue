<script setup lang="ts">
import { reactive, toRefs,toRef } from 'vue';

// 1. 使用 reactive 创建一个响应式对象
let person = reactive({
    name: 'nagi',
    age: 20
})

/* 
   2. 使用 toRefs 解构响应式对象
   - 直接解构 reactive 对象 (如: let {name, age} = person) 会导致解构出来的变量失去响应性。
   - toRefs 的作用是将一个响应式对象的所有属性都转换为相应的 ref 对象。
   - 转换后的每一个 ref 依然和原对象中的属性保持“连接”，修改其中一个，另一个也会同步更新。
*/
let { name, age } = toRefs(person)
let nl = toRef(person, 'name')
console.log(nl.value)
// 3. 修改数据
function changename() {
    // 因为 name 现在是一个 ref，所以在 script 中需要通过 .value 访问
    name.value += '~'  
} 

function changeage() {
    // 对 age.value 的修改会同步反映到 person.age 上
    age.value += 1
}

</script>


<template>
<div class="person">
    <!-- 4. 在模板中直接使用解构出来的变量 -->
    <!-- 由于 toRefs 将属性转为了 ref，在模板中会自动解包，不需要写 .value -->
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <hr>
    <!-- 原始对象依然是响应式的 -->
    <h2>(原始对象)姓名：{{ person.name }}</h2>
    
    <button @click="changename">修改姓名</button>
    <button @click="changeage">修改年龄</button>
</div>
</template>

<style>
.person {
  background-color: #4ba0dd;
  box-shadow: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
}
</style>