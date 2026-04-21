<template>
<div class="person">
    <h3 v-for="value in personlist">{{ value.name }}--{{ value.age }}</h3>
</div>
</template>

<script setup lang="ts">
import{type PersonInter,type Persons}from'@/types'
let person: PersonInter = { id: 'x2301', name: 'nagi', age: 20 }
//或者let person:Persons= [
//.......
// ]
//或者let person:PersonInter[]= [
//.......
// ]
let personlist:Array<PersonInter>= [
     { id: 'x2301', name: 'nagi', age: 20 },
     { id: 'x2302', name: 'luozipeng', age: 18 },
     { id: 'x2303', name: 'hou', age: 19 },
     { id: 'x2304', name: 'pengpeng', age: 0 }
]
</script>

<style scoped> 
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