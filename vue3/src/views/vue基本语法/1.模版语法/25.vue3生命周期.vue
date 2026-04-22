<template>
<h3>sum:{{ sum }}</h3>
<button @click="sumAdd">click</button>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
let sum = ref(0)
function sumAdd() {
    sum.value+=1
}
//创建
//setup自动执行了创建生命周期钩子
console.log('创建')

//挂载
onBeforeMount(() => {
    console.log('挂载前')
})
onMounted(() => {
    console.log('挂载后')
})
//更新
onBeforeUpdate(() => {
    console.log('更新前')
})
onUpdated(() => {
    console.log('更新后')
})
//卸载
onBeforeUnmount(() => {
    console.log('卸载前')
})
onUnmounted(() => {
    console.log('卸载后')
})
</script>

<style scoped>

</style>