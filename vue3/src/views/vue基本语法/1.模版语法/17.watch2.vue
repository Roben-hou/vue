<script setup lang="ts">
import { ref, watch } from 'vue';
let person = ref({
    name: 'nagi',
    age:20  
})
function changename() {
    person.value.name+='~'
}
function changeage() {
    person.value.age+=1
}
function changeperson() {
    person.value={
        name:'shihou',
        age:25
    }
}
//监视定义的ref对象，监视的是对象本身，而不是对象的属性，需要手动开启深度监视deep:true
watch(person,(oldvalue,newvalue)=>{
    console.log('personchange',oldvalue,newvalue)
}, { deep: true }
)
</script>

<template>
    <div class="person">
    <h2>情况2:监听ref定义的对象数据</h2>
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

