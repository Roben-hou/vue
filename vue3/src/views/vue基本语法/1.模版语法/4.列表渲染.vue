<script setup lang="ts">

const array = ['roben', 'nagi', 'kobe']
const obj = {
    name:'nagi',
    age:'20',
    address:'kyoto'
}
</script>
<template>
<div>
    item in array
    <ul>
        <li v-for="item in array">{{ item }}</li>
    </ul>
    (item,index) in array
    <ul>
        <li v-for="(item,index) in array">{{ index}},{{ item }}</li>
    </ul>
    item in obj
    <ul>
        <li v-for="item in obj">{{ item }}</li>
    </ul>
    (value,key) in obj
    <ul>
        <li v-for="(value,key) in obj"> {{ key}}:{{ value }}</li>
    </ul>
    (value,key,index) in obj
    <ul>
        <li v-for="(value,key,index) in obj">{{ index }}.{{ key }}:{{ value }}</li>
    </ul>
</div>
</template>