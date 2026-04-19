<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
let person = reactive({
    name: 'nagi',
    age:20  
})
function changename() {
    person.name+='~'
}
function changeage() {
    person.age+=1
}
function changeperson() {
Object.assign(person,{name:'shihou',age:25})
}

watch(person,(newvalue,oldvalue)=>{
    console.log('personchange',oldvalue,newvalue)
}
)
</script>

<template>
    <div class="person">
    <h2>情况3:监听reactive定义的对象数据</h2>
    <h3>name:{{ person.name }}</h3>
    <h3>age:{{ person.age }}</h3>
    <button @click="changename">changename</button>
    <button @click="changeage">changeage</button>
    <button @click="changeperson">changeperson</button>
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

