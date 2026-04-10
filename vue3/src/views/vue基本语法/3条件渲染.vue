<script setup lang="ts">
const name = 'nagi'
const age = 20
const gender = true
</script>

<template>
<div>
    <div>
 v-if v-else :<span v-if="gender">man</span><span v-else>woman</span><br>
 else-if : <span v-if="age>=30">old</span><span v-else-if="age>18">middle</span><span v-else>young</span>
 </div>
 <div>
    v-show: <span v-show="gender">man</span><span v-show="!gender">woman</span>
 </div>
</div>
</template>

<style scoped>

</style>
