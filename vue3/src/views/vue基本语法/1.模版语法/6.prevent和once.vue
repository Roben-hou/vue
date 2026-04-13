<script setup lang="ts">
function clickhandler(msg:string){
    alert(msg)
}
</script>
<template>
    <div>
        <a href="https://www.baidu.com" @click.prevent="clickhandler('baidu')">baidu</a>
    </div>
    <div>
        <button @click.once="clickhandler('onceclick')">clickme</button>
    </div>
</template>
<style>
a{
    text-decoration: none;
    color: black;
    font-size: 20px;
}
</style>