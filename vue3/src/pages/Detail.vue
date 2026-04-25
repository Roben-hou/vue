<template>
<ul>
    <li>id:{{ id }}</li>
    <li>消息:{{ tittles }}</li>
    <li>内容:{{ content }}</li>
</ul>
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router';

//  let route=useRoute()
defineProps(['id','tittles','content'])
</script>

<style scoped>
</style>