<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
let person = ref({
    name: 'nagi',
    age: 20  ,
    job: {
        type:'student',
        salary:'0k'
    }
})
function changename() {
    person.value.name+='~'
}
function changeage() {
    person.value.age+=1
}
function changetype() {
    person.value.job.type='programmer'
}
function changesalary() {
    person.value.job.salary='20k'
}
function changejob() {
    person.value.job={type:'teacher',salary:'10k'}
}
//监听多个ref对象,用数组形式
watch([()=>person.value.job,()=>person.value.name],(value)=>{
    console.log('jobchange',value)
},{deep:true}
)
</script>

<template>
    <div class="person">
    <h2>情况5:监听reactive定义的对象数据</h2>
    <h3>name:{{ person.name }}</h3>
    <h3>age:{{ person.age }}</h3>
    <h3>job.type:{{ person.job.type }}</h3>
    <h3>job.salary:{{ person.job.salary }}</h3>
    <button @click="changename">changename</button>
    <button @click="changeage">changeage</button>
    <button @click="changetype">changetype</button>
    <button @click="changesalary">changesalary</button>
    <button @click="changejob">changejob</button>
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

