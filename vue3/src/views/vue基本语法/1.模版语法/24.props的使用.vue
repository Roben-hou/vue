<template>
<div class="person">
    <h3>{{ list }}</h3>
<ul>
    <li v-for="value in list" :key="value.id">{{value.name}}--{{value.age}}</li>
</ul>
</div>
</template>

<script setup lang="ts">
import { type Persons } from '@/types'
//接收list + 类型约束 + 限制必要性 + 默认值
//新写法3.5+
const { list =
[{ id: 'x2305', name: 'nag', age: 2 }]
}=
defineProps<{ list?: Persons }>()
//接收list + 类型约束
//defineProps<{list:Persons}>()
//只接收list
//defineProps(['a', 'list'])
//接收list，同时将list保存到x中
// let x = defineProps(['a', 'list'])
// console.log(x)
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