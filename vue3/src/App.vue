<script setup lang="ts">
const myname = 'nagi'
const myhtml = '<span style="color:red">hou</span>'
</script>

<template>
<div v-text="myname"></div>
<div v-text="myname + 'sss'"></div>
<div v-text="`${myname}` + '111'"></div>
<div v-html="myhtml"></div>
</template>

<style scoped>

</style>
