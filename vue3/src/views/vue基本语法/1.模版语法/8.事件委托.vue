<script setup lang="ts">
function clickitem(item:number) {
    console.log(item)
}
function clickitem1(event:Event) {
    const target = event.target as HTMLElement
      const item = target.closest('.item') as HTMLElement;
    
    if (item) {
        const index = item.dataset.index;
        console.log("事件委托捕获到点击：", index);
    }

}
</script>

<template>
<div class="list">
    <div @click="clickitem(item)" class="item" v-for="item in 20" >{{ item }}</div>
</div>

<div class="list" @click="clickitem1">
    <div  class="item" v-for="item in 20" :data-index="item">{{ item }}</div>
</div>
</template>

<style>
.list{
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding: 20px;
    gap:20px;
    margin-bottom: 30px;
    background-color: blanchedalmond;
    .item{
        width: 50px;
        height: 50px;
        background-color: #fff;
        border-radius: 20px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

