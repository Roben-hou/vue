<script setup lang="ts">
function clickhandler(e:Event){
    console.log('click', e)
    
}
function clickhandler1(e: Event,name:string) {
    console.log('click', name)
}
function alertdoubleclick(e:Event,msg:string){
    alert(msg)
}
function enterhandler(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement
    console.log('enter',target.value)
}
function inputhandler(e:InputEvent){
    console.log('input',e.data)
}
function focushandler(){
    console.log('focus')
}
function blurhandler(){
    console.log('blur')
}
</script>

<template>
    <div>点击事件<button v-on:click="clickhandler">click</button></div>
    <div>点击事件<button @click="clickhandler">click</button></div>
    <div>点击事件<button @click="clickhandler1($event,'nagi')">click</button></div>

<div>双击事件<button @dblclick="alertdoubleclick($event,'double click')">double click</button></div>
<div>右键事件<button @click.right="alertdoubleclick($event,'right click')">right click</button></div>
<div>中间键事件<button @click.middle="alertdoubleclick($event,'middle click')">middle click</button></div>
<div>enter键事件<input placeholder="enter" @keydown.enter="enterhandler"></input></div>
<div>input输入<input placeholder="input" @input="inputhandler"></input></div>
<div>input触发焦点<input placeholder="focus" @focus="focushandler"></input></div>
<div>input失去焦点<input placeholder="blur" @blur="blurhandler"></input></div>
<div></div>
</template> 