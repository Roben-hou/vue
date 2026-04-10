<script setup lang="ts">
const name = 'nagi'
const age = '20'
const gender = true
const list = [1, 2, 3]
const obj = { name: 'nagi', age: '20', gender: true }
const className = "active"
const classObj = {
  menu: true,
  active:true
}
const styleObj = {
  fontSize: "20px",
  color:"blue"
}
</script>

<template>
<div>
  <div>
  <!-- 插值表达式 -->
  <div>name:{{ name }}</div>
  <div>age:{{ age+1}}</div>
  <div>gender:{{ gender ?'man':'woman'}}</div>
  <div>list:{{ list}}</div>
  <div>obj:{{ obj }}</div>
  <div>obj.name:{{ obj.name }}</div>
  </div>
  <div>
<div v-bind:name="name">动态绑定name</div>
<div v-bind:class="className">动态绑定class</div>
<div :class="className">动态绑定class</div>
<div :class="classObj">动态绑定classObj</div>
<div :style="styleObj">动态绑定style</div>
  </div>
</div>
</template>

<style scoped>
.active{
  color: red;
}
</style>
