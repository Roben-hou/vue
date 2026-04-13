<script setup lang="ts">
function clickhandler(msg:string){
    console.log(msg)
}
</script>

<template>
    <div>事件冒泡</div>
<div class="A" @click="clickhandler('A')">
    <div class="B" @click="clickhandler('B')">
        <button @click="clickhandler('button')">button</button>
    </div>
</div>
<div>stop阻止事件冒泡</div>
<div class="A" @click.stop="clickhandler('A')">
    <div class="B" @click.stop="clickhandler('B')">
        <button @click.stop="clickhandler('button')">button</button>
    </div>
</div>
<div>self只触发自己的事件</div>
<div class="A" @click="clickhandler('A')">
    <div class="B" @click.self="clickhandler('B')">
        <button @click.self="clickhandler('button')">button</button>
    </div>
</div>
</template>

<style>

.A{
    width: 400px;
    height: 200px;
    background-color: cadetblue;
    padding: 40px;
    margin-bottom: 30px;
    margin-left: 30px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    .B{
        width: 200px;
        height: 100px;
        background-color: rgb(135, 156, 230);
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        button{
            width: 100px;
            height: 50px;
            border-radius: 20px;
        }
    }
}


</style>